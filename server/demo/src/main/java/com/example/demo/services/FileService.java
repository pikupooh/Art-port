package com.example.demo.services;

import com.example.demo.entities.Image;
import com.example.demo.payload.response.ImgurRes;
import com.example.demo.repositories.FileRepository;
import com.example.demo.repositories.ImageRepository;
import com.example.demo.repositories.PostRepository;

import java.io.IOException;

import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.ResourceAccessException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

@Service
public class FileService {

    @Autowired
    FileRepository fileRepository;

    @Autowired
    ImageRepository imageRepository;

    @Autowired
    PostRepository postRepository;

    public String save(String postId, byte[] bytes, String fileName, String username) throws Exception {

        String newName = uploadToImgur(bytes);

        System.out.println(newName);
        Image image = new Image();
        image.setLink(newName);
        return imageRepository.save(image).getId();
    }

     public String find(String imageId){

        Image image = imageRepository.findById(imageId)
                .orElseThrow(() -> new
                        ResponseStatusException(HttpStatus.NOT_FOUND));

        return image.getLink();
    }

    public String uploadToImgur(byte[] file) {
    	String clientId="${demo.app.clientID}";
		final String uri = "https://api.imgur.com/3/image";

		MultiValueMap<String, Object> bodyMap = new LinkedMultiValueMap<>();
		bodyMap.add("image", new ByteArrayResource(file));
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.MULTIPART_FORM_DATA);
		headers.add("Authorization", "Client-ID "+clientId);
		HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(bodyMap, headers);

		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<ImgurRes> response = restTemplate.exchange(uri, HttpMethod.POST, requestEntity, ImgurRes.class);
		System.out.println("response status: " + response.getStatusCode()); // it should return 200
		System.out.println("response body: " + response.getBody().getData().getLink()); // it should return link of your uploaded image
		
		return response.getBody().getData().getLink();
    }
}


