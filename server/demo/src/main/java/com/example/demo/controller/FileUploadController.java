package com.example.demo.controller;


import com.example.demo.entities.Post;
import com.example.demo.services.FileService;
import com.example.demo.services.ImageService;
import com.example.demo.services.PostService;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.security.Principal;
import java.util.Arrays;

@RestController
public class FileUploadController {

    @Autowired
    FileService fileService;

    @Autowired
    PostService postService;

    @Autowired
    ImageService imageService;

    @Autowired
    UserService userService;

    @PostMapping("/post/{postId}/images/upload")
    String uploadImage(@PathVariable String postId, @RequestParam("files") MultipartFile[] multipartFile, Principal principal) throws Exception {


        Arrays.asList(multipartFile).stream().forEach(file -> {
            String imageId = null;
            try {
                imageId = fileService.save(postId, file.getBytes(), file.getOriginalFilename(), principal.getName());
            } catch (Exception e) {
                e.printStackTrace();
            }
            Post post = postService.getPost(postId);
            post.addImage(imageService.getimage(imageId));
            postService.updatePost(post, postId);
        });
        return "Image uploaded successfully";


    }

    @GetMapping(value = "/image/{imageId}", produces = MediaType.IMAGE_JPEG_VALUE)
    FileSystemResource downloadImage(@PathVariable String imageId){

        return fileService.find(imageId);
    }
}
