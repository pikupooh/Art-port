package com.example.demo.entities;

import com.example.demo.payload.response.UserDTO;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;
import java.time.LocalDate;
import java.util.*;

@Document(collection = "posts")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Post {

    @Id
    private String id;
    private String uploadDate;
    @DBRef
    private List<Image> images = Collections.emptyList();
    @DBRef
    private List<Comment> comments = Collections.emptyList();
    private UserDTO userDTO;
    private List<UserDTO> likes = Collections.emptyList();
    @NotBlank
    private String title;
    @NotBlank
    private String description;
    private Type type;

    public Post(){
    }

    public Post(String id, String uploadDate) {
        this.id = id;
        this.uploadDate = uploadDate;
        this.images = new ArrayList<Image>();
    }

    public Post(String uploadDate, List<Image> images) {
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

    public void addLike(UserDTO userDTO){

        this.likes.add(userDTO);
    }

    public void removeLike(UserDTO userDTO){

        this.likes.remove(userDTO);
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

    public String getUploadDate() {
        return uploadDate;
    }

    public void setUploadDate(String uploadDate) {
        this.uploadDate = uploadDate;
    }

    public List<Image> getImages() {
        return images;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }

    public UserDTO getUserDTO() {
        return userDTO;
    }

    public void setUserDTO(UserDTO userDTO) {
        this.userDTO = userDTO;
    }

    public List<UserDTO> getLikes() {
        return likes;
    }

    public void setLikes(List<UserDTO> likes) {
        this.likes = likes;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "Post{" +
                "id='" + id + '\'' +
                ", uploadDate='" + uploadDate + '\'' +
                ", images=" + images +
                ", comments=" + comments +
                ", userDTO=" + userDTO +
                ", likes=" + likes +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
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
