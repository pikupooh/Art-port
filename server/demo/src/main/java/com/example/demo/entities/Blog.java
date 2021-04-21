package com.example.demo.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "blogs")
public class Blog {
	@Id
	private String id;
	private String user_id;
	private String title;
	private String description;
	private String imglink;
	private String content;
	
	
	public Blog(String user_id, String title, String imglink, String description, String content) {
		this.user_id = user_id;
		this.title = title;
		this.description = description;
		this.imglink = imglink;
		this.content = content;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUser() {
		return user_id;
	}
	public void setUser(String user_id) {
		this.user_id = user_id;
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
	public String getImglink() {
		return imglink;
	}
	public void setImglink(String imglink) {
		this.imglink = imglink;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	@Override
    public String toString() {
        return "Blog{" +
                "id='" + id + '\'' +
                ", user_id='" + user_id + '\'' +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", imglink='" + imglink + '\'' +
                ", content='" + content + '\'' +
                '}';
    }
}
