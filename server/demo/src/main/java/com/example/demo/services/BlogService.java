package com.example.demo.services;

import com.example.demo.entities.Blog;
import com.example.demo.entities.User;
import com.example.demo.payload.response.UserDTO;
import com.example.demo.repositories.BlogRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class BlogService {

    @Autowired
    BlogRepository blogRepository;
    
    @Autowired
    ImageService imageService;
    
    @Autowired
    UserService userService;

    public List<Blog> getAllBlogs(){

        return blogRepository.findAll(Sort.by(Sort.Direction.DESC, "uploadDate"));
    }

    public Blog getBlog(String id) {

        Optional<Blog> blog = blogRepository.findById(id);
        return blog.orElse(null);
    }

    public Blog createBlog(Blog blog, String userId){

        blog.setUploadDate(new Date());
        User user = userService.getUser(userId);
        blog.setUser(new UserDTO(user.getId(), user.getUsername(), user.getFirstName(), user.getLastName(), user.getProfilePhoto()));
        blogRepository.save(blog);
        return blog;
    }

    public void deleteAllBlogs(){

        blogRepository.deleteAll();
    }

    public Blog deleteBlog(String id){

        Optional<Blog> blog = blogRepository.findById(id);
        if(!blog.isPresent())
            return null;
        blogRepository.deleteById(id);
        return blog.get();
    }

    public Blog updateBlog(Blog blog, String id){

        Optional<Blog> blog1 = blogRepository.findById(id);
        if(!blog1.isPresent())
            return null;

        blog.setId(id);
        blogRepository.save(blog);

        return blog;
    }
    
    public List<Blog> getBlogByCategory(String[] category) {
    	return blogRepository.findBlogByCategory(category);
    }
    
    public void save(Blog blog){

        blogRepository.save(blog);
    }
}
