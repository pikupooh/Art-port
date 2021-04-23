package com.example.demo.controller;

import com.example.demo.entities.Post;
import com.example.demo.entities.User;
import com.example.demo.repositories.PostRepository;
import com.example.demo.services.PostService;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

@RestController
public class PostController {

    @Autowired
    PostService postService;
    @Autowired
    UserService userService;

    @GetMapping("/post")
    public List<Post> getAllPosts(){

        return postService.getAllPosts();
    }

    @GetMapping("/post/{id}")
    public Post getPost(@PathVariable String id){

        return postService.getPost(id);
    }

    @PostMapping("/users/{id}/post")
    public ResponseEntity<?> createPost(@PathVariable String id, @RequestBody Post post, Principal principal){

        String name = principal.getName();
        User user = userService.getUserByName(name);
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.UNAUTHORIZED);
        if(!user.getId().equals(id))
            return new ResponseEntity<String>("User invalid.", HttpStatus.UNAUTHORIZED);

        Post post1 = postService.createPost(post);
        user.addPost(post);
        userService.updateUser(user, id);
        return ResponseEntity.ok(post1);
    }

    @PutMapping("/users/{id}/post/{postId}")
    public ResponseEntity<?> updatePost(@RequestBody Post post, @PathVariable String id, @PathVariable String postId, Principal principal){

        String name = principal.getName();
        User user = userService.getUserByName(name);
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.UNAUTHORIZED);
        if(!user.getId().equals(id))
            return new ResponseEntity<String>("User invalid.", HttpStatus.UNAUTHORIZED);

        Post post1 = postService.updatePost(post, postId);

        if(post1 == null)
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok(post1);
    }

    @DeleteMapping("/users/{id}/post")
    public ResponseEntity<?> deleteAllPosts(@PathVariable String id, Principal principal){

        String name = principal.getName();
        User user = userService.getUserByName(name);
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.UNAUTHORIZED);
        if(!user.getId().equals(id))
            return new ResponseEntity<String>("User invalid.", HttpStatus.UNAUTHORIZED);

        postService.deleteAllPosts();
        return ResponseEntity.ok("All posts deleted.");
    }

    @DeleteMapping("users/{id}/posts/{postId}")
    public ResponseEntity<?> deletePost(@PathVariable String id, @PathVariable String postId, Principal principal){

        String name = principal.getName();
        User user = userService.getUserByName(name);
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.UNAUTHORIZED);
        if(!user.getId().equals(id))
            return new ResponseEntity<String>("User invalid.", HttpStatus.UNAUTHORIZED);

        Post post = postService.deletePost(id);
        if(post == null)
            return new ResponseEntity<String>("Post does not exist.", HttpStatus.NOT_FOUND);

        return ResponseEntity.ok(post);
    }


}
