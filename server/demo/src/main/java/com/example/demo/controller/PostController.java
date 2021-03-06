
package com.example.demo.controller;

import com.example.demo.entities.Post;
import com.example.demo.entities.User;
import com.example.demo.payload.response.UserDTO;
import com.example.demo.services.PostService;
import com.example.demo.services.ProfileService;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class PostController {

    @Autowired
    PostService postService;

    @Autowired
    ProfileService profileService;

    @Autowired
    UserService userService;
    
    @GetMapping("/post")
    public List<Post> getAllPosts() {

        return postService.getAllPosts();
    }

    @GetMapping("/post/{id}")
    public Post getPost(@PathVariable String id) {

        return postService.getPost(id);
    }


    @PostMapping("/users/{userId}/post")
    public ResponseEntity<?> createPost(@PathVariable String userId, @RequestBody Post post, Principal principal) {

        String name = principal.getName();
        User user = userService.getUserByName(name);
        if (user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.BAD_REQUEST);

        Post post1 = postService.createPost(post, user);
        profileService.addPost(userId, post);

        return ResponseEntity.ok(post1);
    }
  
    @DeleteMapping("users/{userId}/posts/{postId}")
    public ResponseEntity<?> deletePost(@PathVariable String userId, @PathVariable String postId, Principal principal) {

        String name = principal.getName();
        User user = userService.getUserByName(name);
        if (user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.BAD_REQUEST);

        Post post = postService.deletePost(postId);
        if (post == null)
            return new ResponseEntity<String>("Post does not exist.", HttpStatus.NOT_FOUND);
        profileService.removePost(userId, post);
        return ResponseEntity.ok(post);
    }

    @PutMapping("/users/{id}/post/{postId}")
    public ResponseEntity<?> updatePost(@RequestBody Post post, @PathVariable String id, @PathVariable String postId, Principal principal){

        String name = principal.getName();
        User user = userService.getUserByName(name);
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);
        if(!user.getId().equals(id))
            return new ResponseEntity<String>("User invalid.", HttpStatus.BAD_REQUEST);

        Post post1 = postService.updatePost(post, postId);

        if(post1 == null)
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok(post1);
    }

    @PutMapping("/post/{postId}/likes")
    public ResponseEntity<?> addLike(@PathVariable String postId, Principal principal){

        User user = userService.getUserByName(principal.getName());

        Post post = postService.addLike(postId, user);

        if(post== null)
            return new ResponseEntity<String>("Post not found", HttpStatus.NOT_FOUND);

        return ResponseEntity.ok("Like added.");

    }

    @DeleteMapping("/post/{postId}/likes")
    public ResponseEntity<?> removeLike(@PathVariable String postId, Principal principal){

        User user = userService.getUserByName(principal.getName());

        Post post = postService.removeLike(postId, user);

        if(post== null)
            return new ResponseEntity<String>("Post not found", HttpStatus.NOT_FOUND);

        return ResponseEntity.ok("Like removed.");

    }

    /*
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
    */


}
