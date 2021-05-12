package com.example.demo.controller;

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
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@CrossOrigin
@RestController
public class ProfileController {

    @Autowired
    ProfileService profileService;

    @Autowired
    PostService postService;

    @Autowired
    UserService userService;
    
    @Autowired
    MangaService mangaService;
    
    @Autowired
    BlogService blogService;

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/profile")
    public List<Profile> getAllProfiles(){

        return profileService.getAllProfiles();
    }

    @GetMapping("/users/{userId}/profile")
    public ResponseEntity<?> getUserProfile(@PathVariable String userId){

        User user = userService.getUser(userId);
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.UNAUTHORIZED);

        return ResponseEntity.ok(profileService.getUserProfile(userId));
    }

    @GetMapping("/users/{userId}/posts")
    public ResponseEntity<?> getUserPosts(@PathVariable String userId, Principal principal){

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.UNAUTHORIZED);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.UNAUTHORIZED);

        return ResponseEntity.ok(profileService.getUserPosts(userId));
    }

    @GetMapping("/users/{userId}/blogs")
    public ResponseEntity<?> getUserBlogs(@PathVariable String userId, Principal principal){

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.UNAUTHORIZED);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.UNAUTHORIZED);

        return ResponseEntity.ok(profileService.getUserBlogs(userId));
    }
    
    @GetMapping("/users/{userId}/mangas")
    public ResponseEntity<?> getUserMangas(@PathVariable String userId, Principal principal){

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.UNAUTHORIZED);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.UNAUTHORIZED);

        return ResponseEntity.ok(profileService.getUserMangas(userId));
    }

    @GetMapping("/users/{userId}/followers")
    public ResponseEntity<?> getFollowers(@PathVariable String userId, Principal principal){

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.UNAUTHORIZED);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.UNAUTHORIZED);

        return ResponseEntity.ok(profileService.getFollowers(userId));
    }

    @GetMapping("/users/{userId}/following")
    public ResponseEntity<?> getFollowing(@PathVariable String userId, Principal principal){

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.UNAUTHORIZED);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.UNAUTHORIZED);

        return ResponseEntity.ok(profileService.getFollowing(userId));
    }

    @GetMapping("/users/{userId}/favoritePosts")
    public ResponseEntity<?> getFavoritePosts(@PathVariable String userId, Principal principal){

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.UNAUTHORIZED);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.UNAUTHORIZED);

        return ResponseEntity.ok(profileService.getFavoritePosts(userId));
    }

    @GetMapping("/users/{userId}/favoriteBlogs")
    public ResponseEntity<?> getFavoriteBlogs(@PathVariable String userId, Principal principal){

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.UNAUTHORIZED);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.UNAUTHORIZED);

        return ResponseEntity.ok(profileService.getFavoriteBlogs(userId));
    }

    @GetMapping("/users/{userId}/favoriteMangas")
    public ResponseEntity<?> getFavoriteMangas(@PathVariable String userId, Principal principal){

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.UNAUTHORIZED);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.UNAUTHORIZED);

        return ResponseEntity.ok(profileService.getFavoriteMangas(userId));
    }
    
    @PostMapping("/users/{userId}/follower/{followerId}")
    public ResponseEntity<?> addFollower(@PathVariable String userId, @PathVariable String followerId, Principal principal){

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.UNAUTHORIZED);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.UNAUTHORIZED);

        profileService.addFollower(userId, followerId);
        return ResponseEntity.ok("Follower added");
    }

    @DeleteMapping("/users/{userId}/follower/{followerId}")
    public ResponseEntity<?> removeFollower(@PathVariable String userId, @PathVariable String followerId, Principal principal){

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.UNAUTHORIZED);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.UNAUTHORIZED);

        profileService.deleteFollower(userId, followerId);
        return ResponseEntity.ok("Follower removed");
    }

    @PostMapping("/users/{userId}/favorites/post/{postId}")
    public ResponseEntity<?> addFavoritePost(@PathVariable String userId, @PathVariable String postId, Principal principal){

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.UNAUTHORIZED);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.UNAUTHORIZED);

        profileService.addFavoritePost(userId, postService.getPost(postId));
        return ResponseEntity.ok("Post added as favorite");
    }

    @DeleteMapping("/users/{userId}/favorites/post/{postId}")
    public ResponseEntity<?> removeFavoritePost(@PathVariable String userId, @PathVariable String postId, Principal principal) {

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.UNAUTHORIZED);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.UNAUTHORIZED);

        profileService.deleteFavoritePost(userId, postService.getPost(postId));
        return ResponseEntity.ok("Post added as favorite");
    }
    
    @PostMapping("/users/{userId}/favorites/blog/{blogId}")
    public ResponseEntity<?> addFavoriteBlog(@PathVariable String userId, @PathVariable String blogId, Principal principal){

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.UNAUTHORIZED);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.UNAUTHORIZED);

        profileService.addFavoriteBlog(userId, blogService.getBlog(blogId));
        return ResponseEntity.ok("Post added as favorite");
    }

    @DeleteMapping("/users/{userId}/favorites/blog/{blogId}")
    public ResponseEntity<?> removeFavoriteBlog(@PathVariable String userId, @PathVariable String blogId, Principal principal) {

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.UNAUTHORIZED);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.UNAUTHORIZED);

        profileService.deleteFavoriteBlog(userId, blogService.getBlog(blogId));
        return ResponseEntity.ok("Post added as favorite");
    }

    @PostMapping("/users/{userId}/favorites/manga/{mangaId}")
    public ResponseEntity<?> addFavoriteManga(@PathVariable String userId, @PathVariable String mangaId, Principal principal){

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.UNAUTHORIZED);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.UNAUTHORIZED);

        profileService.addFavoriteManga(userId, mangaService.getManga(mangaId));
        return ResponseEntity.ok("Manga added as favorite");
    }

    @DeleteMapping("/users/{userId}/favorites/manga/{postId}")
    public ResponseEntity<?> removeFavoriteManga(@PathVariable String userId, @PathVariable String mangaId, Principal principal) {

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.UNAUTHORIZED);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.UNAUTHORIZED);

        profileService.deleteFavoriteManga(userId, mangaService.getManga(mangaId));
        return ResponseEntity.ok("Manga deleted as favorite");
    }


}
