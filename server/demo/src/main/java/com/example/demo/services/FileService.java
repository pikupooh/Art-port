package com.example.demo.services;

import com.example.demo.entities.Image;
// import com.example.demo.payload.response.ImgBBRes;
import com.example.demo.payload.response.ImgurRes;
import com.example.demo.repositories.ImageRepository;
import com.example.demo.repositories.PostRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;

@Service
public class FileService {

    @Autowired
    ImageRepository imageRepository;

    @Autowired
    PostRepository postRepository;
    
    @Value("${demo.app.clientID}")
    String clientID;

    public String save(byte[] bytes, String fileName, String username) throws Exception {

        String link = uploadToImgur(bytes);
        Image image = new Image();
        image.setName(fileName);
        image.setLink(link);
        return imageRepository.save(image).getId();
    }

     public String find(String imageId){

        Image image = imageRepository.findById(imageId)
                .orElseThrow(() -> new
                        ResponseStatusException(HttpStatus.NOT_FOUND));

        return image.getLink();
    }

    public String uploadToImgur(byte[] file) {
		final String uri = "https://api.imgur.com/3/image";

		MultiValueMap<String, Object> bodyMap = new LinkedMultiValueMap<>();
		bodyMap.add("image", new ByteArrayResource(file));
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.MULTIPART_FORM_DATA);
		headers.add("Authorization", "Client-ID "+clientID);
		HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(bodyMap, headers);

		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<ImgurRes> response = restTemplate.exchange(uri, HttpMethod.POST, requestEntity, ImgurRes.class);
		System.out.println("response status: " + response.getStatusCode()); // it should return 200
		System.out.println("response body: " + response.getBody().getData().getLink()); // it should return link of your uploaded image
		
		return response.getBody().getData().getLink();
    	
//    	String url = "https://api.imgbb.com/1/upload?key=ea599885273b467df62aa25bbc4805b8";
//    	MultiValueMap<String, Object> bodyMap = new LinkedMultiValueMap<>();
//    	bodyMap.add("image", Base64.getEncoder().encode(file));
//    	HttpHeaders headers = new HttpHeaders();
//    	headers.setContentType(MediaType.MULTIPART_FORM_DATA);
//    	HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(bodyMap, headers);
//
//    	RestTemplate restTemplate = new RestTemplate();
//    	ResponseEntity<ImgBBRes> response = restTemplate.exchange(url, HttpMethod.POST, requestEntity, ImgBBRes.class);
//    	System.out.println(response.getBody().getData());
//    	return response.getBody().getData().getUrl();
    }
    
    
}


