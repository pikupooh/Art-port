package com.example.demo.controller;

import com.example.demo.entities.Blog;
import com.example.demo.entities.Manga;
import com.example.demo.entities.Post;
import com.example.demo.payload.response.Searches;
import com.example.demo.services.BlogService;
import com.example.demo.services.MangaService;
import com.example.demo.services.PostService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class SearchController {

    @Autowired
    PostService postService;

    @Autowired
    MangaService mangaService;
    
    @Autowired
    BlogService blogService;

    @PostMapping("/search")
    public ResponseEntity<?> searchByTags(@RequestBody String[] tags){

        List<Post> posts = postService.getPostByTags(tags);
        List<Blog> blogs = blogService.getBlogByCategory(tags);
        List<Manga> manga = mangaService.getMangaByCategory(tags);
        List<Manga> comic = mangaService.getComicByCategory(tags);
        
        return ResponseEntity.ok(new Searches(posts, manga, blogs, comic));
    }
    
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
    public ResponseEntity<?> getPostsByTags(@RequestBody String[] tags){

        return ResponseEntity.ok(postService.getPostByTags(tags));
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
