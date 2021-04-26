package com.example.demo.services;

import com.example.demo.entities.Post;
import com.example.demo.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    @Autowired
    PostRepository postRepository;

    public List<Post> getAllPosts(){

        return postRepository.findAll();
    }

    public Post getPost(String id) {

        Optional<Post> post = postRepository.findById(id);

        return post.get();
    }

    public Post createPost(Post post){

        post.setUploadDate(new Date());
        postRepository.save(post);
        return post;
    }

    public void deleteAllPosts(){

        postRepository.deleteAll();
    }

    public Post deletePost(String id){

        Optional<Post> post = postRepository.findById(id);
        if(!post.isPresent())
            return null;
        postRepository.deleteById(id);
        return post.get();
    }

    public Post updatePost(Post post, String id){

        Optional<Post> post1 = postRepository.findById(id);
        if(!post1.isPresent())
            return null;

        post.setId(id);
        postRepository.save(post);

        return post;
    }
}
