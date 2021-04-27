package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Document(collection = "posts")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Post {

    @Id
    private String id;
    private Date uploadDate;
    @DBRef
    private List<Image> images;
    @DBRef
    private List<Comment> comments;

    public Post(){

        images = new ArrayList<>();
        comments = new ArrayList<>();
    }

    public Post(String id, Date uploadDate) {
        this.id = id;
        this.uploadDate = uploadDate;
        this.images = new ArrayList<Image>();
    }

    public Post(Date uploadDate, List<Image> images) {
        this.uploadDate = uploadDate;
        this.images = images;
    }

    public void addImage(Image image){

        this.images.add(image);
    }

    public void removeImage(Image image){

        this.images.remove(image);
    }

    public void addComment(Comment comment){

        this.comments.add(comment);
    }

    public void removeComment(Comment comment){

        this.comments.remove(comment);
    }
    public void removeAllImages(Image image){

        this.images.clear();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Date getUploadDate() {
        return uploadDate;
    }

    public void setUploadDate(Date uploadDate) {
        this.uploadDate = uploadDate;
    }

    public List<Image> getImages() {
        return images;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    @Override
    public String toString() {
        return "Post{" +
                "id='" + id + '\'' +
                ", uploadDate='" + uploadDate + '\'' +
                ", images=" + images +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Post post = (Post) o;
        return id.equals(post.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
