package com.example.demo.entities;

public class Rating {
	private String mangaId;
	int rating;
	
	public Rating(String mangaId, int rating) {
		super();
		this.mangaId = mangaId;
		this.rating = rating;
	}
	
	public String getMangaId() {
		return mangaId;
	}
	public void setMangaId(String mangaId) {
		this.mangaId = mangaId;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	
	
}
