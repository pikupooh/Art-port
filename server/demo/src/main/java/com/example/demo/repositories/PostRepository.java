package com.example.demo.repositories;

import com.example.demo.entities.Post;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;


public interface PostRepository extends MongoRepository<Post, String> {

	@Query(value = "{ 'category' : {$all : ?0 }}")
    List<Post> findPostByCategory(String[] category);
	
	@Query(value = "{ 'tags' : {$all : ?0 }}")
    List<Post> findPostByTags(String[] tags);

	@Query(fields = "{likes: 1}")
	Post findLikesById(String id);
}
