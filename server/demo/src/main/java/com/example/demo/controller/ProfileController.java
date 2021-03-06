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

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.List;

//@CrossOrigin
@RestController
@RequestMapping("/api")
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


    @GetMapping("/profile")
    public List<Profile> getAllProfiles(){

        return profileService.getAllProfiles();
    }

    @GetMapping("/users/{userId}/profile")
    public ResponseEntity<?> getUserProfile(@PathVariable String userId){

        User user = userService.getUser(userId);
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);

        return ResponseEntity.ok(profileService.getUserProfile(userId));
    }

    @GetMapping("/users/{userId}/posts")
    public ResponseEntity<?> getUserPosts(@PathVariable String userId, Principal principal){

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.BAD_REQUEST);

        return ResponseEntity.ok(profileService.getUserPosts(userId));
    }

    @GetMapping("/users/{userId}/blogs")
    public ResponseEntity<?> getUserBlogs(@PathVariable String userId, Principal principal){

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.BAD_REQUEST);

        return ResponseEntity.ok(profileService.getUserBlogs(userId));
    }
    
    @GetMapping("/users/{userId}/mangas")
    public ResponseEntity<?> getUserMangas(@PathVariable String userId, Principal principal){

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.BAD_REQUEST);

        return ResponseEntity.ok(profileService.getUserMangas(userId));
    }
    
    @GetMapping("/users/{userId}/comics")
    public ResponseEntity<?> getUserComics(@PathVariable String userId, Principal principal){

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.BAD_REQUEST);

        return ResponseEntity.ok(profileService.getUserComics(userId));
    }

    @GetMapping("/users/{userId}/followers")
    public ResponseEntity<?> getFollowers(@PathVariable String userId, Principal principal){

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.BAD_REQUEST);

        return ResponseEntity.ok(profileService.getFollowers(userId));
    }

    @GetMapping("/users/{userId}/following")
    public ResponseEntity<?> getFollowing(@PathVariable String userId, Principal principal){

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.BAD_REQUEST);

        return ResponseEntity.ok(profileService.getFollowing(userId));
    }

    @GetMapping("/users/{userId}/favoritePosts")
    public ResponseEntity<?> getFavoritePosts(@PathVariable String userId, Principal principal){

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.BAD_REQUEST);

        return ResponseEntity.ok(profileService.getFavoritePosts(userId));
    }

    @GetMapping("/users/{userId}/favoriteBlogs")
    public ResponseEntity<?> getFavoriteBlogs(@PathVariable String userId, Principal principal){

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.BAD_REQUEST);

        return ResponseEntity.ok(profileService.getFavoriteBlogs(userId));
    }

    @GetMapping("/users/{userId}/favoriteMangas")
    public ResponseEntity<?> getFavoriteMangas(@PathVariable String userId, Principal principal){

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.BAD_REQUEST);

        return ResponseEntity.ok(profileService.getFavoriteMangas(userId));
    }
    
    @GetMapping("/users/{userId}/favoriteComics")
    public ResponseEntity<?> getFavoriteComics(@PathVariable String userId, Principal principal){

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.BAD_REQUEST);

        return ResponseEntity.ok(profileService.getFavoriteComics(userId));
    }
    
    @PostMapping("/users/{userId}/follower/{followerId}")
    public ResponseEntity<?> addFollower(@PathVariable String userId, @PathVariable String followerId, Principal principal, HttpServletRequest request){

        long start = System.currentTimeMillis();
        String test = request.getRequestURI();
        System.out.println(test);
        System.out.println("hehe");

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.BAD_REQUEST);


        User following = profileService.addFollower(userId, followerId);
        System.out.println(System.currentTimeMillis()-start);
        return ResponseEntity.ok(following);
    }

    @DeleteMapping("/users/{userId}/follower/{followerId}")
    public ResponseEntity<?> removeFollower(@PathVariable String userId, @PathVariable String followerId, Principal principal){

        long start = System.currentTimeMillis();
        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.BAD_REQUEST);

        profileService.deleteFollower(userId, followerId);

        System.out.println(System.currentTimeMillis()-start);
        return ResponseEntity.ok("Follower removed");
    }

    @PostMapping("/users/{userId}/favorites/post/{postId}")
    public ResponseEntity<?> addFavoritePost(@PathVariable String userId, @PathVariable String postId, Principal principal){


        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.BAD_REQUEST);

        profileService.addFavoritePost(userId, postService.getPost(postId));
        return ResponseEntity.ok("Post added as favorite");
    }

    @DeleteMapping("/users/{userId}/favorites/post/{postId}")
    public ResponseEntity<?> removeFavoritePost(@PathVariable String userId, @PathVariable String postId, Principal principal) {

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.BAD_REQUEST);

        profileService.deleteFavoritePost(userId, postService.getPost(postId));
        return ResponseEntity.ok("Post added as favorite");
    }
    
    @PostMapping("/users/{userId}/favorites/blog/{blogId}")
    public ResponseEntity<?> addFavoriteBlog(@PathVariable String userId, @PathVariable String blogId, Principal principal){

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.BAD_REQUEST);

        profileService.addFavoriteBlog(userId, blogService.getBlog(blogId));
        return ResponseEntity.ok("Post added as favorite");
    }

    @DeleteMapping("/users/{userId}/favorites/blog/{blogId}")
    public ResponseEntity<?> removeFavoriteBlog(@PathVariable String userId, @PathVariable String blogId, Principal principal) {

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.BAD_REQUEST);

        profileService.deleteFavoriteBlog(userId, blogService.getBlog(blogId));
        return ResponseEntity.ok("Post added as favorite");
    }

    @PostMapping("/users/{userId}/favorites/manga/{mangaId}")
    public ResponseEntity<?> addFavoriteManga(@PathVariable String userId, @PathVariable String mangaId, Principal principal){

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.BAD_REQUEST);

        profileService.addFavoriteManga(userId, mangaService.getManga(mangaId));
        return ResponseEntity.ok("Manga added as favorite");
    }

    @DeleteMapping("/users/{userId}/favorites/manga/{postId}")
    public ResponseEntity<?> removeFavoriteManga(@PathVariable String userId, @PathVariable String mangaId, Principal principal) {

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.BAD_REQUEST);

        profileService.deleteFavoriteManga(userId, mangaService.getManga(mangaId));
        return ResponseEntity.ok("Manga deleted as favorite");
    }
    
    @PostMapping("/users/{userId}/favorites/comic/{mangaId}")
    public ResponseEntity<?> addFavoriteComic(@PathVariable String userId, @PathVariable String mangaId, Principal principal){

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.BAD_REQUEST);

        profileService.addFavoriteComic(userId, mangaService.getManga(mangaId));
        return ResponseEntity.ok("Manga added as favorite");
    }

    @DeleteMapping("/users/{userId}/favorites/comic/{postId}")
    public ResponseEntity<?> removeFavoriteComic(@PathVariable String userId, @PathVariable String mangaId, Principal principal) {

        User user = userService.getUserByName(principal.getName());
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.BAD_REQUEST);

        profileService.deleteFavoriteComic(userId, mangaService.getManga(mangaId));
        return ResponseEntity.ok("Comic deleted as favorite");
    }


}
