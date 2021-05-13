package com.example.demo.services;

import com.example.demo.entities.Comment;
import com.example.demo.entities.Reply;
import com.example.demo.entities.Type;
import com.example.demo.entities.User;
import com.example.demo.payload.response.UserDTO;
import com.example.demo.repositories.CommentRepository;
import com.example.demo.repositories.ReplyRepository;
import com.example.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@Service
public class CommentService {

    @Autowired
    CommentRepository commentRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ReplyRepository replyRepository;

    public Comment createComment(String username, String content, String type, String typeId){

        Comment comment = new Comment();
        comment.setType(Type.valueOf(type));
        comment.setCreatedDate(LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss")));
        comment.setContent(content);
        comment.setTypeId(typeId);
        User user = userRepository.findByUsername(username).get();

        UserDTO userDTO = new UserDTO(user.getId(), user.getUsername(), user.getFirstName(), user.getLastName(), user.getProfilePhoto());
        comment.setUser(userDTO);

        commentRepository.save(comment);
        return comment;
    }
    public Reply createReply(String username, String content, String replyTo, String parentId){

        Reply reply = new Reply();
        reply.setContent(content);
        reply.setReplyTo(replyTo);
        reply.setCreatedDate(LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss")));

        Optional<Comment> comment1 = commentRepository.findById(parentId);
        if(!comment1.isPresent())
            return null;

        Comment comment = comment1.get();
        reply.setComment(comment);

        User user = userRepository.findByUsername(username).get();
        UserDTO userDTO = new UserDTO(user.getId(), user.getUsername(), user.getFirstName(), user.getLastName(), user.getProfilePhoto());
        reply.setUser(userDTO);

        replyRepository.save(reply);

        comment.addReply(reply);
        commentRepository.save(comment);
        return reply;
    }

    public Comment updateComment(String content, String commentId){

        Optional<Comment> comment1 = commentRepository.findById(commentId);
        if(!comment1.isPresent())
            return null;
        Comment comment = comment1.get();

        comment.setId(commentId);
        comment.setCreatedDate(LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss")));
        comment.setContent(content);

        commentRepository.save(comment);
        return comment;
    }

    public void updateComment(Comment comment, String commentId){

        comment.setId(commentId);
        commentRepository.save(comment);
    }

    public Reply updateReply(String content, String replyId){

        Optional<Reply> reply1 = replyRepository.findById(replyId);
        if(!reply1.isPresent())
            return null;
        Reply reply = reply1.get();

        reply.setId(replyId);
        reply.setCreatedDate(LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss")));
        reply.setContent(content);

        replyRepository.save(reply);
        return reply;
    }

    public Comment deleteComment(String commentId){

        Optional<Comment> comment1 = commentRepository.findById(commentId);
        if(!comment1.isPresent())
            return null;

        Comment comment = comment1.get();
        List<Reply> replies = comment.getReplies();

        replies.forEach((reply) -> {
            replyRepository.deleteById(reply.getId());
        });

        commentRepository.deleteById(commentId);

        return comment;
    }

    public Reply deleteReply(String replyId){

        Optional<Reply> reply1 = replyRepository.findById(replyId);
        if(!reply1.isPresent())
            return null;

        Reply reply = reply1.get();

        replyRepository.deleteById(replyId);

        return reply;

    }
}
