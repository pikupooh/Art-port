package com.example.demo.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.entities.Blog;

public interface BlogRepository extends MongoRepository<Blog, String> {
	
}
