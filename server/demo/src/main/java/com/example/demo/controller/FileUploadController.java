package com.example.demo.controller;


import com.example.demo.entities.Blog;
import com.example.demo.entities.Image;
import com.example.demo.entities.Post;
import com.example.demo.entities.User;
import com.example.demo.services.BlogService;
import com.example.demo.services.FileService;
import com.example.demo.services.ImageService;
import com.example.demo.services.PostService;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.security.Principal;
import java.util.Arrays;

@CrossOrigin
@RestController
public class FileUploadController {

    @Autowired
    FileService fileService;

    @Autowired
    PostService postService;
    
    @Autowired
    BlogService blogService;

    @Autowired
    ImageService imageService;

    @Autowired
    UserService userService;

    @PostMapping("/post/{postId}/images/upload")
    String uploadImage(@PathVariable String postId, @RequestParam("files") MultipartFile[] multipartFile, Principal principal) throws Exception {


        Arrays.asList(multipartFile).stream().forEach(file -> {
            String imageId = null;
            try {
                imageId = fileService.save(file.getBytes(), file.getOriginalFilename(), principal.getName());
            } catch (Exception e) {
                e.printStackTrace();
            }
            Post post = postService.getPost(postId);
            post.addImage(imageService.getimage(imageId));
            postService.updatePost(post, postId);
        });
        return "Image uploaded successfully";


    }

    @PostMapping("/blogs/{blogId}/images/upload")
    String uploadBlogImage(@PathVariable String blogId, @RequestParam("files") MultipartFile[] multipartFile, Principal principal) throws Exception {


        Arrays.asList(multipartFile).stream().forEach(file -> {
            String imageId = null;
            try {
                imageId = fileService.save(file.getBytes(), file.getOriginalFilename(), principal.getName());
            } catch (Exception e) {
                e.printStackTrace();
            }
            Blog blog = blogService.getBlog(blogId);
            blog.setImg(imageService.getimage(imageId));
            blogService.updateBlog(blog, blogId);
        });
        return "Image uploaded successfully";


    }

    @PostMapping("/users/{userId}/upload")
    String profilePhoto(@PathVariable String userId, @RequestParam("files") MultipartFile[] multipartFile, Principal principal) throws Exception {
    	User user = userService.getUser(userId);
    	if(user.getProfilePhoto() == null) {

	        Arrays.asList(multipartFile).stream().forEach(file -> {
	            String imageId = null;
	            try {
	                imageId = fileService.save(file.getBytes(), file.getOriginalFilename(), principal.getName());
	            } catch (Exception e) {
	                e.printStackTrace();
	            }
	            user.setProfilePhoto(imageService.getimage(imageId));
	            userService.updateUser(user, userId);
	        });
	        return "Image uploaded successfully";
    	}
    	
    	Arrays.asList(multipartFile).stream().forEach(file -> {
            String link = null;
            try {
                link = fileService.uploadToImgur(file.getBytes());
            } catch (Exception e) {
                e.printStackTrace();
            }
            Image img = user.getProfilePhoto();
            img.setLink(link);
        });
        return "Image uploaded successfully";


    }
    
    @GetMapping("/image/{imageId}")
    String getImageLink(@PathVariable String imageId){

        return fileService.find(imageId);
    }
}
