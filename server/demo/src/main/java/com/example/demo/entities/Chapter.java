package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;
import java.util.*;

@Document(collection = "chapters")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Chapter {

    @Id
    private String id;
    @DBRef
    private List<Image> images = Collections.emptyList();
    @DBRef
    private List<Comment> comments = Collections.emptyList();
    @NotBlank
    private String name;
    private int no;
    private String mangaId;

    public String getMangaId() {
		return mangaId;
	}

	public void setMangaId(String mangaId) {
		this.mangaId = mangaId;
	}

	public Chapter(){
    }

    public Chapter(String id, List<Image> images, List<Comment> comments, @NotBlank String name, @NotBlank int no) {
		super();
		this.id = id;
		this.images = images;
		this.comments = comments;
		this.name = name;
		this.no = no;
	}

	public Chapter(String name, int no, List<Image> images) {
    	this.name = name;
    	this.no = no;
        this.images = images;
    }

    public void addImage(Image image){

        this.images.add(image);
    }

    public void removeImage(Image image){

        this.images.remove(image);
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

	public List<Image> getImages() {
		return images;
	}

	public void setImages(List<Image> images) {
		this.images = images;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getNo() {
		return no;
	}

	public void setNo(int no) {
		this.no = no;
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

  
}
