package com.example.demo.entities;

import com.example.demo.payload.response.UserDTO;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;
import java.util.*;

@Document(collection = "mangas")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Manga {

    @Id
    private String id;
    private String uploadDate;
    @DBRef
    private Image coverPhoto;
    @DBRef
    private List<Chapter> chapters = Collections.emptyList();
    @DBRef
    private List<Comment> comments = Collections.emptyList();
    private UserDTO userDTO;
    @NotBlank
    private String title;
    @NotBlank
    private String about;
    private List<String> category = Collections.emptyList();
    int rating = 0;
    int ratingCount = 0;
    private Type type;
    
    public Manga() {
    	
    }
    
	public Manga(String id, String uploadDate, UserDTO userDTO) {
		super();
		this.id = id;
		this.uploadDate = uploadDate;
		this.userDTO = userDTO;
	}

	public Manga(String id, String uploadDate, Image coverPhoto, List<Chapter> chapters, List<Comment> comments,
			UserDTO userDTO, @NotBlank String title, @NotBlank String about, List<String> category, int rating, int ratingCount, Type type) {
		super();
		this.id = id;
		this.uploadDate = uploadDate;
		this.coverPhoto = coverPhoto;
		this.chapters = chapters;
		this.comments = comments;
		this.userDTO = userDTO;
		this.title = title;
		this.about = about;
		this.category = category;
		this.rating = rating;
		this.ratingCount = ratingCount;
		this.type = type;
		
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
	public Image getCoverPhoto() {
		return coverPhoto;
	}
	public void setCoverPhoto(Image coverPhoto) {
		this.coverPhoto = coverPhoto;
	}
	public List<Chapter> getChapters() {
		return chapters;
	}
	public void setChapters(List<Chapter> chapters) {
		this.chapters = chapters;
	}
	public List<Comment> getComments() {
		return comments;
	}
	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}
	public UserDTO getUserDTO() {
		return userDTO;
	}
	public void setUserDTO(UserDTO userDTO) {
		this.userDTO = userDTO;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAbout() {
		return about;
	}
	public void setAbout(String about) {
		this.about = about;
	}
	public List<String> getCategory() {
		return category;
	}
	public void setCategory(List<String> category) {
		this.category = category;
	}
	public Type getType() {
		return type;
	}
	public void setType(Type type) {
		this.type = type;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public int getRatingCount() {
		return ratingCount;
	}

	public void setRatingCount(int ratingCount) {
		this.ratingCount = ratingCount;
	}

	public void addComment(Comment comment){

        this.comments.add(comment);
    }

    public void removeComment(Comment comment){

        this.comments.remove(comment);
    }
    
    public void addChapter(Chapter chapter){

        this.chapters.add(chapter);
    }

    public void removeChapter(Chapter chapter){

        this.chapters.remove(chapter);
    } 
   
}
