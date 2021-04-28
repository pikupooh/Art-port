package com.example.demo.entities;

import com.example.demo.payload.response.UserDTO;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;


import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Document(collection = "blogs")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Blog {
	@Id
	private String id;
	private Date uploadDate;
	@DBRef
	private UserDTO author;
	private String title;
	private String description;
	@DBRef
	private Image img;
	private String content;
	@DBRef
	private List<Comment> comments;
	private List<UserDTO> likes = Collections.emptyList();

	public Blog(){
		comments = new ArrayList<>();
	}
	
	
	public Blog(Date uploadDate, User author, String title, String description, Image img, String content) {
		this.title = title;
		this.description = description;
		this.content = content;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}

	public UserDTO getAuthor() {
		return author;
	}
	public void setAuthor(UserDTO author) {
		this.author = author;
	}
	public Image getImg() {
		return img;
	}
	public void setImg(Image img) {
		this.img = img;
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

	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Date getUploadDate() {
		return uploadDate;
	}
	public void setUploadDate(Date uploadDate) {
		this.uploadDate = uploadDate;
	}

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}

	public void addComment(Comment comment){
		this.comments.add(comment);
	}

	public void removeComment(Comment comment){
		this.comments.remove(comment);
	}

	@Override
    public String toString() {
        return "Blog{" +
                "id='" + id + '\'' +
                ", date='" + uploadDate + '\'' +
                ", author='" + author + '\'' +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", img='" + img + '\'' +
                ", content='" + content + '\'' +
                '}';
    }

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Blog blog = (Blog) o;
		return id.equals(blog.id);
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}


	public List<UserDTO> getLikes() {
		return likes;
	}


	public void setLikes(List<UserDTO> likes) {
		this.likes = likes;
	}
	public void addLike(UserDTO userDTO){

        this.likes.add(userDTO);
    }

    public void removeLike(UserDTO userDTO){

        this.likes.remove(userDTO);
    }
}

