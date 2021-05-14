package com.example.demo.payload.response;

import com.example.demo.entities.Post;

import java.util.List;

import com.example.demo.entities.Blog;
import com.example.demo.entities.Manga;

public class Searches {

    private List<Post> posts;
    private List<Manga> mangas;
    private List<Blog> blogs;
    private List<Manga> comics;
    
	public Searches(List<Post> posts, List<Manga> mangas, List<Blog> blogs, List<Manga> comics) {
		super();
		this.posts = posts;
		this.mangas = mangas;
		this.blogs = blogs;
		this.comics = comics;
	}

	public List<Post> getPosts() {
		return posts;
	}

	public void setPosts(List<Post> posts) {
		this.posts = posts;
	}

	public List<Manga> getMangas() {
		return mangas;
	}

	public void setMangas(List<Manga> mangas) {
		this.mangas = mangas;
	}

	public List<Blog> getBlogs() {
		return blogs;
	}

	public void setBlogs(List<Blog> blogs) {
		this.blogs = blogs;
	}

	public List<Manga> getComics() {
		return comics;
	}

	public void setComics(List<Manga> comics) {
		this.comics = comics;
	}

}
