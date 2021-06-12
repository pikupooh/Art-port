package com.example.demo.services;

import com.example.demo.entities.Post;
import com.example.demo.entities.Profile;
import com.example.demo.entities.User;
import com.example.demo.payload.response.UserDTO;
import com.example.demo.repositories.PostRepository;
import com.mongodb.client.result.UpdateResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    @Autowired
    PostRepository postRepository;

    @Autowired
    CommentService commentService;

    @Autowired
    ImageService imageService;

    @Autowired
    MongoTemplate mongoTemplate;

    public List<Post> getAllPosts(){

        return postRepository.findAll(Sort.by(Sort.Direction.DESC, "uploadDate"));
    }


    public Post getPost(String id) {

        Optional<Post> post = postRepository.findById(id);
        return post.orElse(null);
    }

    public Post createPost(Post post, User user){

        System.out.println(post);
        post.setUploadDate(LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss")));
        post.setUser(user);
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

        Post post1 = post.get();

        post1.getComments().forEach((comment) ->{
            commentService.deleteComment(comment.getId());
        });

        post1.getImages().forEach((image) ->{
            imageService.deleteimage(image.getId());
        });

        postRepository.deleteById(id);
        return post1;
    }

    public  Post updatePostComment(Post post){
        return postRepository.save(post);
    }

    public Post updatePost(Post post, String id){

        Optional<Post> post1 = postRepository.findById(id);
        if(!post1.isPresent())
            return null;

        Post newPost = post1.get();
        newPost.setUploadDate(LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss")));
        newPost.setTitle(post.getTitle());
        newPost.setDescription(post.getDescription());
        if(post.getImages()!=null)
        	newPost.setImages(post.getImages());
        postRepository.save(newPost);

        return newPost;
    }
    
    public List<Post> getPostByCategory(String[] category) {
    	return postRepository.findPostByCategory(category);
    }
    
    public List<Post> getPostByTags(String[] tags) {
    	return postRepository.findPostByTags(tags);
    }

    public Post addLike(String postId, User user){

        Post post = postRepository.findLikesById(postId);

        if(post == null)
            return null;

        post.addLike(user);

        Query query = Query.query(Criteria.where("id").is(postId));
        Update update = new Update();
        update.set("likes", post.getLikes());

        UpdateResult updateResult = mongoTemplate.updateFirst(query, update, Post.class);
        System.out.println(updateResult);

        return post;
    }

    public Post removeLike(String postId, User user){

        Post post = postRepository.findLikesById(postId);

        if(post == null)
            return null;
        post.removeLike(user);

        Query query = Query.query(Criteria.where("id").is(postId));
        Update update = new Update();
        update.set("likes", post.getLikes());

        UpdateResult updateResult = mongoTemplate.updateFirst(query, update, Post.class);
        System.out.println(updateResult);

        return post;
    }

    public void save(Post post){

        postRepository.save(post);
    }
}
