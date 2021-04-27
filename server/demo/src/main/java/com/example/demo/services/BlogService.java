package com.example.demo.services;

import com.example.demo.entities.Blog;
import com.example.demo.repositories.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class BlogService {

    @Autowired
    BlogRepository blogRepository;
    
    @Autowired
    UserService userService;

    public List<Blog> getAllBlogs(){

        return blogRepository.findAll();
    }

    public Blog getBlog(String id) {

        Optional<Blog> Blog = blogRepository.findById(id);

        return Blog.get();
    }

    public Blog createBlog(Blog blog, String userId){

        blog.setUploadDate(new Date());
        blog.setAuthor(userService.getUser(userId));
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
}
