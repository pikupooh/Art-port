package com.example.demo.controller;

import com.example.demo.entities.*;
import com.example.demo.payload.request.CommentBody;
import com.example.demo.services.BlogService;
import com.example.demo.services.ChapterService;
import com.example.demo.services.CommentService;
import com.example.demo.services.MangaService;
import com.example.demo.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;

@CrossOrigin
@RestController
public class CommentController {

    @Autowired
    CommentService commentService;

    @Autowired
    PostService postService;

    @Autowired
    BlogService blogService;
    
    @Autowired
    MangaService mangaService;
    
    @Autowired
    ChapterService chapterService;

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
    
    @GetMapping("/manga/{mangaId}/comment")
    public ResponseEntity<?> getCommentManga(@PathVariable String mangaId){
        Manga manga = mangaService.getManga(mangaId);

        if(manga == null){
            return new ResponseEntity<String>("Manga not found.", HttpStatus.NOT_FOUND);
        }

        return ResponseEntity.ok(manga.getComments());
    }
    
    @GetMapping("/manga/{mangaId}/chapter/{chapterId}")
    public ResponseEntity<?> getCommentChapter(@PathVariable String mangaId, @PathVariable String chapterId){
        Manga manga = mangaService.getManga(mangaId);

        if(manga == null){
            return new ResponseEntity<String>("Manga not found.", HttpStatus.NOT_FOUND);
        }
        
        Chapter chapter = chapterService.getChapter(chapterId);
        
        if(chapter == null) {
        	return new ResponseEntity<String>("Chapter not found.", HttpStatus.NOT_FOUND);
        }

        return ResponseEntity.ok(chapter.getComments());
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


        return ResponseEntity.ok(comment);
    }
    
    @PostMapping("/manga/{mangaId}/comment")
    public ResponseEntity<?> addCommentManga(@PathVariable String mangaId, @Valid @RequestBody CommentBody commentBody, Principal principal){
        Manga manga = mangaService.getManga(mangaId);

        if(manga == null){
            return new ResponseEntity<String>("Manga not found.", HttpStatus.NOT_FOUND);
        }

        Comment comment = commentService.createComment(principal.getName(), commentBody.getContent(), "MANGA", mangaId);

        manga.addComment(comment);
        mangaService.updateManga(manga, mangaId);

        return ResponseEntity.ok("Comment added");
    }
    
    @PostMapping("/manga/{mangaId}/chapter/{chapId}/comment")
    public ResponseEntity<?> addCommentChapter(@PathVariable String mangaId, @PathVariable String chapId, @Valid @RequestBody CommentBody commentBody, Principal principal){
        Chapter chap = chapterService.getChapter(chapId);

        if(chap == null){
            return new ResponseEntity<String>("Manga not found.", HttpStatus.NOT_FOUND);
        }

        Comment comment = commentService.createComment(principal.getName(), commentBody.getContent(), "CHAPTER", mangaId);

        chap.addComment(comment);
        chapterService.updateChapter(chap, chapId);

        return ResponseEntity.ok("Comment added");
    }


    @PostMapping("/comment/{commentId}/reply")
    public ResponseEntity<?> addReply(@PathVariable String commentId, @Valid @RequestBody CommentBody commentBody, Principal principal){
        Reply reply = commentService.createReply(principal.getName(), commentBody.getContent(), commentBody.getReplyTo(), commentId);

        if(reply == null){
            return new ResponseEntity<String>("Comment not found.", HttpStatus.NOT_FOUND);
        }

        return ResponseEntity.ok(reply);
    }

    @PutMapping("/comment/{commentId}")
    public ResponseEntity<?> updateComment(@PathVariable String commentId, @Valid @RequestBody CommentBody commentBody){

        Comment comment = commentService.updateComment(commentBody.getContent(), commentId);

        if(comment == null){
            return new ResponseEntity<String>("Comment not found.", HttpStatus.NOT_FOUND);

        }

        return ResponseEntity.ok(comment);

    }

    @PutMapping("/reply/{replyId}")
    public ResponseEntity<?> updateReply(@PathVariable String replyId, @Valid @RequestBody CommentBody commentBody){

        Reply reply = commentService.updateReply(commentBody.getContent(), replyId);

        if(reply == null){
            return new ResponseEntity<String>("Comment not found.", HttpStatus.NOT_FOUND);

        }

        return ResponseEntity.ok(reply);

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
        else if(comment.getType() == Type.MANGA){
            String mangaId = comment.getTypeId();
            Manga manga = mangaService.getManga(mangaId);
            manga.removeComment(comment);
            mangaService.updateManga(manga, mangaId);
        }
        else if(comment.getType() == Type.CHAPTER){
            String chapId = comment.getTypeId();
            Chapter chap = chapterService.getChapter(chapId);
            chap.removeComment(comment);
            chapterService.updateChapter(chap, chapId);
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
