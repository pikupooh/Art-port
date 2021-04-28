package com.example.demo.controller;

import com.example.demo.entities.*;
import com.example.demo.payload.request.CommentBody;
import com.example.demo.services.BlogService;
import com.example.demo.services.CommentService;
import com.example.demo.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;

@RestController
public class CommentController {

    @Autowired
    CommentService commentService;

    @Autowired
    PostService postService;

    @Autowired
    BlogService blogService;

    @GetMapping("/post/{postId}/comment")
    public ResponseEntity<?> getCommentPost(@PathVariable String postId){
        Post post = postService.getPost(postId);

        if(post == null){
            return new ResponseEntity<String>("Post not found.", HttpStatus.NOT_FOUND);
        }

        return ResponseEntity.ok(post.getComments());
    }

    @GetMapping("/blog/{blogId}/comment")
    public ResponseEntity<?> getCommentBlog(@PathVariable String blogId){
        Blog blog = blogService.getBlog(blogId);

        if(blog == null){
            return new ResponseEntity<String>("Blog not found.", HttpStatus.NOT_FOUND);
        }

        return ResponseEntity.ok(blog.getComments());
    }

    @PostMapping("/post/{postId}/comment")
    public ResponseEntity<?> addCommentPost(@PathVariable String postId, @Valid @RequestBody CommentBody commentBody, Principal principal){
        Post post = postService.getPost(postId);

        if(post == null){
            return new ResponseEntity<String>("Post not found.", HttpStatus.NOT_FOUND);
        }

        Comment comment = commentService.createComment(principal.getName(), commentBody.getContent(), "POST", postId);

        post.addComment(comment);
        postService.updatePost(post, postId);

        return ResponseEntity.ok("Comment added");
    }

    @PostMapping("/blog/{blogId}/comment")
    public ResponseEntity<?> addCommentBlog(@PathVariable String blogId, @Valid @RequestBody CommentBody commentBody, Principal principal){
        Blog blog = blogService.getBlog(blogId);

        if(blog == null){
            return new ResponseEntity<String>("Blog not found.", HttpStatus.NOT_FOUND);
        }

        Comment comment = commentService.createComment(principal.getName(), commentBody.getContent(), "BLOG", blogId);

        blog.addComment(comment);
        blogService.updateBlog(blog, blogId);

        return ResponseEntity.ok("Comment added");
    }


    @PostMapping("/comment/{commentId}/reply")
    public ResponseEntity<?> addReply(@PathVariable String commentId, @Valid @RequestBody CommentBody commentBody, Principal principal){
        Reply reply = commentService.createReply(principal.getName(), commentBody.getContent(), commentId);

        if(reply == null){
            return new ResponseEntity<String>("Comment not found.", HttpStatus.NOT_FOUND);
        }

        return ResponseEntity.ok("Reply added");
    }

    @PutMapping("/comment/{commentId}")
    public ResponseEntity<?> updateComment(@PathVariable String commentId, @Valid @RequestBody CommentBody commentBody){

        Comment comment = commentService.updateComment(commentBody.getContent(), commentId);

        if(comment == null){
            return new ResponseEntity<String>("Comment not found.", HttpStatus.NOT_FOUND);

        }

        return ResponseEntity.ok("Comment updated.");

    }

    @PutMapping("/reply/{replyId}")
    public ResponseEntity<?> updateReply(@PathVariable String replyId, @Valid @RequestBody CommentBody commentBody){

        Reply reply = commentService.updateReply(commentBody.getContent(), replyId);

        if(reply == null){
            return new ResponseEntity<String>("Comment not found.", HttpStatus.NOT_FOUND);

        }

        return ResponseEntity.ok("Reply updated.");

    }

    @DeleteMapping("/comment/{commentId}")
    public ResponseEntity<?> deleteComment(@PathVariable String commentId){

        Comment comment = commentService.deleteComment(commentId);

        if(comment == null){
            return new ResponseEntity<String>("Comment not found.", HttpStatus.NOT_FOUND);

        }

        if(comment.getType() == Type.POST) {
            String postId = comment.getTypeId();
            Post post = postService.getPost(postId);

            post.removeComment(comment);
            postService.updatePost(post, postId);
        }
        else if(comment.getType() == Type.BLOG){
            String blogId = comment.getTypeId();
            Blog blog = blogService.getBlog(blogId);
            blog.removeComment(comment);
            blogService.updateBlog(blog, blogId);
        }
        return ResponseEntity.ok("Comment Deleted.");

    }

    @DeleteMapping("/reply/{replyId}")
    public ResponseEntity<?> deleteReply(@PathVariable String replyId){

        Reply reply = commentService.deleteReply(replyId);

        if(reply == null){
            return new ResponseEntity<String>("Comment not found.", HttpStatus.NOT_FOUND);

        }

        Comment comment = reply.getComment();

        comment.removeReply(reply);
        commentService.updateComment(comment, comment.getId());
        return ResponseEntity.ok("Reply Deleted.");


    }

}
