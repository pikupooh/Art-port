package com.example.demo.entities;

import com.example.demo.payload.response.UserDTO;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;


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
	private User user;
	private String title;
	private String description;
	@DBRef
	private Image img;
	private String content;
	@DBRef
	private List<Comment> comments = Collections.emptyList();

	@DBRef
	private List<User> likes = Collections.emptyList();
    private List<String> category = Collections.emptyList();

	public Blog(){

	}
	
	
	public Blog(Date uploadDate, User user, String title, String description, String content) {
		this.title = title;
		this.description = description;
		this.content = content;
		this.user = user;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
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
	
	

	public List<String> getCategory() {
		return category;
	}


	public void setCategory(List<String> category) {
		this.category = category;
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
                ", author='" + user + '\'' +
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


	public List<User> getLikes() {
		return likes;
	}


	public void setLikes(List<User> likes) {
		this.likes = likes;
	}
	public void addLike(User user){

        this.likes.add(user);
    }

    public void removeLike(User user){

        this.likes.remove(user);
    }
}

