package com.example.demo.controller;


import com.example.demo.entities.Blog;
import com.example.demo.entities.Chapter;
import com.example.demo.entities.Image;
import com.example.demo.entities.Manga;
import com.example.demo.entities.Post;
import com.example.demo.entities.User;
import com.example.demo.payload.request.FileRequest;
import com.example.demo.services.BlogService;
import com.example.demo.services.ChapterService;
import com.example.demo.services.FileService;
import com.example.demo.services.ImageService;
import com.example.demo.services.MangaService;
import com.example.demo.services.PostService;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.security.Principal;
import java.util.Arrays;
import java.util.LinkedList;

//@CrossOrigin(origins = "http://localhost:3000")
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
    
    @Autowired
    MangaService mangaService;
    
    @Autowired
    ChapterService chapterService;

    @PostMapping(value = "/posts/{postId}/images/upload")
    ResponseEntity<?> uploadImage(@PathVariable String postId,  @RequestParam("files") MultipartFile[] multipartFile, Principal principal) throws Exception {
    	
    	Post post = postService.getPost(postId);
        Arrays.asList(multipartFile).stream().forEach(file -> {
            String imageId = null;
            try {
                imageId = fileService.save(file.getBytes(), file.getOriginalFilename());
            } catch (Exception e) {
                e.printStackTrace();
            }
            post.addImage(imageService.getimage(imageId));
            postService.save(post);
        });
        return ResponseEntity.ok(post);


    }

    @PostMapping("/blogs/{blogId}/images/upload")
    ResponseEntity<?> uploadBlogImage(@PathVariable String blogId, @RequestParam("files") MultipartFile[] multipartFile, Principal principal) throws Exception {
    	Blog blog = blogService.getBlog(blogId);

        Arrays.asList(multipartFile).stream().forEach(file -> {
            String imageId = null;
            try {
                imageId = fileService.save(file.getBytes(), file.getOriginalFilename());
            } catch (Exception e) {
                e.printStackTrace();
            }
            
            blog.setImg(imageService.getimage(imageId));
            blogService.save(blog);
        });
        return ResponseEntity.ok(blog);


    }
    
    @PostMapping("/mangas/{mangaId}/images/upload")
    ResponseEntity<?> uploadMangaImage(@PathVariable String mangaId, @RequestParam("files") MultipartFile[] multipartFile, Principal principal) throws Exception {
    	Manga manga = mangaService.getManga(mangaId);

        Arrays.asList(multipartFile).stream().forEach(file -> {
            String imageId = null;
            try {
                imageId = fileService.save(file.getBytes(), file.getOriginalFilename());
            } catch (Exception e) {
                e.printStackTrace();
            }
            manga.setCoverPhoto(imageService.getimage(imageId));
            mangaService.save(manga);
        });
        return ResponseEntity.ok(manga);

    }
    
    @PostMapping("/chapters/{chapId}/images/upload")
    ResponseEntity<?> uploadChapterImage(@PathVariable String chapId, @RequestParam("files") MultipartFile[] multipartFile, Principal principal) throws Exception {

    	Chapter chap = chapterService.getChapter(chapId);
        Arrays.asList(multipartFile).stream().forEach(file -> {
            String imageId = null;
            try {
                imageId = fileService.save(file.getBytes(), file.getOriginalFilename());
            } catch (Exception e) {
                e.printStackTrace();
            }
            chap.addImage(imageService.getimage(imageId));
            chapterService.save(chap);
        });
        return ResponseEntity.ok(chap);
    }

    @PostMapping("/users/{userId}/upload")
    String profilePhoto(@PathVariable String userId, @RequestParam("files") MultipartFile[] multipartFile, Principal principal) throws Exception {
    	User user = userService.getUser(userId);
    	if(user.getProfilePhoto() == null) {

	        Arrays.asList(multipartFile).stream().forEach(file -> {
	            String imageId = null;
	            try {
	                imageId = fileService.save(file.getBytes(), file.getOriginalFilename());
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
            imageService.save(img);
        });
        return "Image updated successfully";

    }
    
    @GetMapping("/image/{imageId}")
    String getImageLink(@PathVariable String imageId){

        return fileService.find(imageId);
    }
}
