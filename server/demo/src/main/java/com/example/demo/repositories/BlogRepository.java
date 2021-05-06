package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.demo.entities.Blog;

public interface BlogRepository extends MongoRepository<Blog, String> {
	@Query(value = "{ 'category' : {$all : [?0] }}")
    List<Blog> findBlogByCategory(String[] category);
}
