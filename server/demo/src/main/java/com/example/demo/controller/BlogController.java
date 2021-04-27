package com.example.demo.controller;

import java.security.Principal;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.repositories.BlogRepository;
import com.example.demo.entities.Blog;
import com.example.demo.entities.User;

import com.example.demo.services.BlogService;
import com.example.demo.services.ProfileService;
import com.example.demo.services.UserService;

@CrossOrigin
@RestController
public class BlogController {
    @Autowired
    BlogService blogService;
    @Autowired
    ProfileService profileService;
    @Autowired
    UserService userService;
    
	@Autowired
	private BlogRepository blogRepository;
	
	@GetMapping("/blogs")
	public List<Blog> getAllBlogs(){
		return blogRepository.findAll();
	}
	
	@GetMapping("/blog/{id}")
    public Blog getBlog(@PathVariable String id) {
    	
        return blogService.getBlog(id);
    }
	
	@PostMapping("/users/{userId}/blog")
    public ResponseEntity<?> createPost(@PathVariable String userId, @RequestBody Blog blog, Principal principal) {

        String name = principal.getName();
        User user = userService.getUserByName(name);
        if (user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.UNAUTHORIZED);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.UNAUTHORIZED);
        Blog blog1 = blogService.createBlog(blog, userId);
        profileService.addBlog(userId, blog1);

        return ResponseEntity.ok(blog1);
    }

	@PutMapping("/blog/{id}")
	public ResponseEntity<?> updateBlog(@PathVariable String id, @RequestBody Blog updatedBlog, Principal principal){
		Blog blog = blogRepository.findById(id)
				.orElseThrow(); //TODO: manage exception
		if(!(principal.getName().equals(blog.getAuthor().getUsername())))
			return new ResponseEntity<String>("Unauthorized", HttpStatus.UNAUTHORIZED);
		blog.setTitle(updatedBlog.getTitle());
		blog.setImg(updatedBlog.getImg());
		blog.setContent(updatedBlog.getContent());
		blog.setDescription(updatedBlog.getDescription());
		blog.setUploadDate(new Date());
		
		Blog updateBlog = blogRepository.save(blog);
		return ResponseEntity.ok(updateBlog);
	}
	
	@DeleteMapping("/blog/{id}")
	public ResponseEntity<?> deleteEmployee(@PathVariable String id, Principal principal){
		Blog blog = blogRepository.findById(id)
				.orElseThrow(); //TODO: manage exception
		if(!(principal.getName().equals(blog.getAuthor().getUsername())))
			return new ResponseEntity<String>("Unauthorized", HttpStatus.UNAUTHORIZED);
		blogRepository.delete(blog);
		return ResponseEntity.ok("DELETED:"+blog.getId());
	}
}