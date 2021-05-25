package com.example.demo.entities;

import java.util.Objects;

public class Rating {
	private String mangaId;
	double rating;
	
	public Rating(String mangaId, double rating) {
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
	public double getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Rating rating = (Rating) o;
		return mangaId.equals(rating.mangaId);
	}

	@Override
	public int hashCode() {
		return Objects.hash(mangaId);
	}
}
