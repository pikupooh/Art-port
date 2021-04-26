package com.example.demo.services;

import com.example.demo.entities.Image;
import com.example.demo.repositories.FileRepository;
import com.example.demo.repositories.ImageRepository;
import com.example.demo.repositories.PostRepository;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;
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

        String newName = fileRepository.save(bytes, fileName, username);

        System.out.println(newName);
        Image image = new Image();
        image.setName(newName);
        image.setPost(postRepository.findById(postId).get());
        return imageRepository.save(image).getId();
    }

     public FileSystemResource find(String imageId){

        Image image = imageRepository.findById(imageId)
                .orElseThrow(() -> new
                        ResponseStatusException(HttpStatus.NOT_FOUND));

        return fileRepository.findFile(image.getName());
    }
}


