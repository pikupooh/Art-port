package com.example.demo.repositories;

import com.example.demo.entities.Post;
import com.example.demo.entities.Type;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface PostRepository extends MongoRepository<Post, String> {

    @Query(fields = "{'type': 0}")
    List<Post> findPostByType(Type type);

}
