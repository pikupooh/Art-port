package com.example.demo.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.repositories.BlogRepository;
import com.example.demo.entities.Blog;

@CrossOrigin
@RestController
@RequestMapping("/api/blogs")
public class BlogController {
	
	@Autowired
	private BlogRepository blogRepository;
	
	@GetMapping
	public List<Blog> getAllBlogs(){
		return blogRepository.findAll();
	}		
	
	@PostMapping("/create")
	public ResponseEntity<?> createBlog(@RequestBody Blog blog, Principal principal) {
		if(!(principal.getName().equals(blog.getUser())))
			return new ResponseEntity<String>("Unauthorized", HttpStatus.UNAUTHORIZED);
		Blog updateBlog = blogRepository.save(blog);
		return ResponseEntity.ok(updateBlog);
	}
	
	@GetMapping("/blog/{id}")
	public ResponseEntity<Blog> getBlogById(@PathVariable String id) {
		Blog blog = blogRepository.findById(id).orElseThrow();
				//TODO: manage exception if not found
		return ResponseEntity.ok(blog);
	}
	
	
	@PutMapping("/blog/{id}")
	public ResponseEntity<?> updateBlog(@PathVariable String id, @RequestBody Blog updatedBlog, Principal principal){
		Blog blog = blogRepository.findById(id)
				.orElseThrow(); //TODO: manage exception
		if(!(principal.getName().equals(blog.getUser())))
			return new ResponseEntity<String>("Unauthorized", HttpStatus.UNAUTHORIZED);
		blog.setTitle(updatedBlog.getTitle());
		blog.setImglink(updatedBlog.getImglink());
		blog.setContent(updatedBlog.getContent());
		blog.setDescription(updatedBlog.getDescription());
		
		Blog updateBlog = blogRepository.save(blog);
		return ResponseEntity.ok(updateBlog);
	}
	
	@DeleteMapping("/blog/{id}")
	public ResponseEntity<?> deleteEmployee(@PathVariable String id, Principal principal){
		Blog blog = blogRepository.findById(id)
				.orElseThrow(); //TODO: manage exception
		if(!(principal.getName().equals(blog.getUser())))
			return new ResponseEntity<String>("Unauthorized", HttpStatus.UNAUTHORIZED);
		blogRepository.delete(blog);
		return ResponseEntity.ok("DELETED:"+blog.getId());
	}
	
}
