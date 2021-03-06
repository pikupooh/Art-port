package com.example.demo.controller;

import java.security.Principal;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.repositories.BlogRepository;
import com.example.demo.entities.Blog;
import com.example.demo.entities.User;
import com.example.demo.payload.response.UserDTO;
import com.example.demo.services.BlogService;
import com.example.demo.services.ProfileService;
import com.example.demo.services.UserService;

@CrossOrigin
@RestController
@RequestMapping("/api")
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
		return blogRepository.findAll(Sort.by(Sort.Direction.DESC, "uploadDate"));
	}
	
	@GetMapping("/blog/{id}")
    public Blog getBlog(@PathVariable String id) {
    	
        return blogService.getBlog(id);
    }
	
	@PostMapping("/users/{userId}/blog")
    public ResponseEntity<?> createBlog(@PathVariable String userId, @RequestBody Blog blog, Principal principal) {

        String name = principal.getName();
        User user = userService.getUserByName(name);
        if (user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.BAD_REQUEST);
        Blog blog1 = blogService.createBlog(blog, userId);
        profileService.addBlog(userId, blog1);

        return ResponseEntity.ok(blog1);
    }

	@PutMapping("/blog/{id}")
	public ResponseEntity<?> updateBlog(@PathVariable String id, @RequestBody Blog updatedBlog, Principal principal){
		Blog blog = blogRepository.findById(id)
				.orElse(null);
		if(blog == null) {
			return new ResponseEntity<String>("Blog not found", HttpStatus.NOT_FOUND);
		}
		if(!(principal.getName().equals(blog.getUser().getUsername())))
			return new ResponseEntity<String>("Unauthorized", HttpStatus.BAD_REQUEST);
		blog.setTitle(updatedBlog.getTitle());
		blog.setImg(updatedBlog.getImg());
		blog.setContent(updatedBlog.getContent());
		blog.setDescription(updatedBlog.getDescription());
		blog.setUploadDate(new Date());
		
		Blog updateBlog = blogRepository.save(blog);
		return ResponseEntity.ok(updateBlog);
	}
	
	@DeleteMapping("/users/{userId}/blog/{id}")
	public ResponseEntity<?> deleteBlog(@PathVariable String userId, @PathVariable String id, Principal principal){
        String name = principal.getName();
        User user = userService.getUserByName(name);
        if (user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.BAD_REQUEST);

		Blog blog = blogService.deleteBlog(id);

		if(blog == null)
			return new ResponseEntity<String>("Post not found", HttpStatus.NOT_FOUND);
        profileService.removeBlog(userId, blog);
		return ResponseEntity.ok("DELETED:"+blog.getId());
	}
	
	@PutMapping("/blog/{blogId}/likes")
    public ResponseEntity<?> addLike(@PathVariable String blogId, Principal principal){

        Blog blog = blogService.getBlog(blogId);

        if(blog== null)
            return new ResponseEntity<String>("Blog not found", HttpStatus.NOT_FOUND);

        User user = userService.getUserByName(principal.getName());

        if(blog.getLikes().contains(user))
            return new ResponseEntity<String>("Already liked", HttpStatus.BAD_REQUEST);

        blog.addLike(user);
        blogService.save(blog);

        return ResponseEntity.ok("Like added.");

    }

    @DeleteMapping("/blog/{blogId}/likes")
    public ResponseEntity<?> removeLike(@PathVariable String blogId, Principal principal){

        Blog blog = blogService.getBlog(blogId);

        if(blog== null)
            return new ResponseEntity<String>("Blog not found", HttpStatus.BAD_REQUEST);

        User user = userService.getUserByName(principal.getName());

        blog.removeLike(user);
        blogService.save(blog);

        return ResponseEntity.ok("Like removed.");

    }
}