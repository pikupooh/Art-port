package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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


    public Post(){
        images = new ArrayList<>();
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

        images.add(image);
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

    @Override
    public String toString() {
        return "Post{" +
                "id='" + id + '\'' +
                ", uploadDate='" + uploadDate + '\'' +
                ", images=" + images +
                '}';
    }
}
