package com.example.demo.controller;


import com.example.demo.entities.Blog;
import com.example.demo.entities.Chapter;
import com.example.demo.entities.Image;
import com.example.demo.entities.Manga;
import com.example.demo.entities.Post;
import com.example.demo.entities.User;
import com.example.demo.services.BlogService;
import com.example.demo.services.ChapterService;
import com.example.demo.services.FileService;
import com.example.demo.services.ImageService;
import com.example.demo.services.MangaService;
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
    
    @Autowired
    MangaService mangaService;
    
    @Autowired
    ChapterService chapterService;

    @PostMapping("/posts/{postId}/images/upload")
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
            postService.save(post);
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
            blogService.save(blog);
        });
        return "Image uploaded successfully";


    }
    
    @PostMapping("/mangas/{mangaId}/images/upload")
    String uploadMangaImage(@PathVariable String mangaId, @RequestParam("files") MultipartFile[] multipartFile, Principal principal) throws Exception {


        Arrays.asList(multipartFile).stream().forEach(file -> {
            String imageId = null;
            try {
                imageId = fileService.save(file.getBytes(), file.getOriginalFilename(), principal.getName());
            } catch (Exception e) {
                e.printStackTrace();
            }
            Manga manga = mangaService.getManga(mangaId);
            manga.setCoverPhoto(imageService.getimage(imageId));
            mangaService.save(manga);
        });
        return "Image uploaded successfully";


    }
    
    @PostMapping("/chapters/{chapId}/images/upload")
    String uploadChapterImage(@PathVariable String chapId, @RequestParam("files") MultipartFile[] multipartFile, Principal principal) throws Exception {


        Arrays.asList(multipartFile).stream().forEach(file -> {
            String imageId = null;
            try {
                imageId = fileService.save(file.getBytes(), file.getOriginalFilename(), principal.getName());
            } catch (Exception e) {
                e.printStackTrace();
            }
            Chapter chap = chapterService.getChapter(chapId);
            chap.addImage(imageService.getimage(imageId));
            chapterService.save(chap);
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
