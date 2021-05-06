package com.example.demo.controller;

import com.example.demo.entities.Blog;
import com.example.demo.entities.Manga;
import com.example.demo.entities.Post;
import com.example.demo.entities.Profile;
import com.example.demo.entities.User;
import com.example.demo.services.BlogService;
import com.example.demo.services.MangaService;
import com.example.demo.services.PostService;
import com.example.demo.services.ProfileService;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
public class SearchController {

    @Autowired
    PostService postService;

    @Autowired
    MangaService mangaService;
    
    @Autowired
    BlogService blogService;

    @GetMapping("/search/posts")
    public List<Post> getAllPosts(){

        return postService.getAllPosts();
    }
    
    @GetMapping("/search/blogs")
    public List<Blog> getAllBlogs(){

        return blogService.getAllBlogs();
    }
    
    @GetMapping("/search/manga")
    public List<Manga> getAllManga(){

        return mangaService.getAllManga();
    }
    
    @GetMapping("/search/posts/category")
    public List<Post> getPostsByCategory(@RequestBody String[] category){

        return postService.getPostByCategory(category);
    }
    
    @GetMapping("/search/posts/tags")
    public List<Post> getPostsByTags(@RequestBody String[] tags){

        return postService.getPostByTags(tags);
    }
    
    @GetMapping("/search/blog/category")
    public List<Blog> getBlogsByCategory(@RequestBody String[] category){

        return blogService.getBlogByCategory(category);
    }
    
    @GetMapping("/search/manga/category")
    public List<Manga> getMangaByCategory(@RequestBody String[] category){

        return mangaService.getMangaByCategory(category);
    }
    
    
}
