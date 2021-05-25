package com.example.demo.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.*;

@Document(collection = "user_profile")
public class Profile {

    @Id
    private String id;
    @DBRef
    private List<Post> userPosts;
    @DBRef
    private List<Blog> userBlogs;
    @DBRef
    private List<Manga> userMangas;
    @DBRef
    private List<Manga> userComics;
    @DBRef
    private List<User> followers;
    @DBRef
    private List<User> following;
    @DBRef
    private List<Post> favoritePosts;
    @DBRef
    private List<Blog> favoriteBlogs;
    @DBRef
    private List<Manga> favoriteMangas;
    @DBRef
    private List<Manga> favoriteComics;
    private Map<String, Double> userRatings = new HashMap<>();

    public Profile() {

        this.userPosts = new ArrayList<>();
        this.followers = new ArrayList<>();
        this.following = new ArrayList<>();
        this.favoritePosts = new ArrayList<>();
        this.userBlogs = new ArrayList<>();
        this.favoriteBlogs = new ArrayList<>();
        this.favoriteMangas = new ArrayList<>();
        this.userComics = new ArrayList<>();
        this.favoriteComics = new ArrayList<>();
        this.userBlogs = new ArrayList<>();
        this.userMangas = new ArrayList<>();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public List<Post> getUserPosts() {
        return userPosts;
    }

    public void setUserPosts(List<Post> userPosts) {
        this.userPosts = userPosts;
    }

	public List<Manga> getUserMangas() {
		return userMangas;
	}

	public void setUserMangas(List<Manga> userManga) {
		this.userMangas = userManga;
	}
	
	public List<Manga> getUserComics() {
		return userComics;
	}

	public void setUserComics(List<Manga> userComic) {
		this.userComics = userComic;
	}


	public List<Manga> getFavoriteMangas() {
		return favoriteMangas;
	}

	public void setFavoriteMangas(List<Manga> favoriteMangas) {
		this.favoriteMangas = favoriteMangas;
	}
	
	public List<Manga> getFavoriteComics() {
		return favoriteComics;
	}

	public void setFavoriteComics(List<Manga> favoriteComics) {
		this.favoriteComics = favoriteComics;
	}

	public List<User> getFollowers() {
        return followers;
    }

    public void setFollowers(List<User> followers) {
        this.followers = followers;
    }

    public List<User> getFollowing() {
        return following;
    }

    public void setFollowing(List<User> following) {
        this.following = following;
    }

    public List<Post> getFavoritePosts() {
        return favoritePosts;
    }

    public void setFavoritePosts(List<Post> favoritePosts) {
        this.favoritePosts = favoritePosts;
    }

    public List<Blog> getUserBlogs() {
        return userBlogs;
    }

    public void setUserBlogs(List<Blog> userBlogs) {
        this.userBlogs = userBlogs;
    }

    public List<Blog> getFavoriteBlogs() {
        return favoriteBlogs;
    }

    public void setFavoriteBlogs(List<Blog> favoriteBlogs) {
        this.favoriteBlogs = favoriteBlogs;
    }

    public void addPost(Post post){

        this.userPosts.add(post);
    }

    public void deletePost(Post post){

        this.userPosts.remove(post);
    }

    public void addFavoritePost(Post post){

        this.favoritePosts.add(post);
    }

    public void removeFavoritePost(Post post){

        System.out.println(this.favoritePosts);
        this.favoritePosts.remove(post);
    }

    public void addBlog(Blog blog){

        this.userBlogs.add(blog);
    }

    public void deleteBlog(Blog blog){

        this.userBlogs.remove(blog);
    }

    public void addFavoriteBlog(Blog blog){

        this.favoriteBlogs.add(blog);
    }

    public void removeFavoriteBlog(Blog blog){

        this.favoriteBlogs.remove(blog);
    }

    public void addFollower(User user){

        this.followers.add(user);
    }

    public void addFollowing(User user){

        this.following.add(user);
    }

    public void removeFollower(User user){

        this.followers.remove(user);
    }

    public void removeFollowing(User user){

        this.following.remove(user);
    }

    public void addManga(Manga manga){

        this.userMangas.add(manga);
    }

    public void deleteManga(Manga manga){

        this.userMangas.remove(manga);
    }

    public void addFavoriteManga(Manga manga){

        this.favoriteMangas.add(manga);
    }

    public void removeFavoriteManga(Manga manga){

        System.out.println(this.favoriteMangas);
        this.favoriteMangas.remove(manga);
    }
    
    public void addComic(Manga manga){

        this.userComics.add(manga);
    }

    public void deleteComic(Manga manga){

        this.userComics.remove(manga);
    }

    public void addFavoriteComic(Manga manga){

        this.favoriteComics.add(manga);
    }

    public void removeFavoriteComic(Manga manga){

        System.out.println(this.favoriteMangas);
        this.favoriteComics.remove(manga);
    }


    public Map<String, Double> getUserRatings() {
        return userRatings;
    }

    public void setUserRatings(Map<String, Double> userRatings) {
        this.userRatings = userRatings;
    }

    public double addRating(String id, double rating){

        double value = -1.0;
        if(this.userRatings.containsKey(id)){
            value = this.userRatings.get(id);
        }

        this.userRatings.put(id, rating);

        return value;
    }
    @Override
    public String toString() {
        return "Profile{" +
                "id='" + id + '\'' +
                ", userPosts=" + userPosts +
                ", userBlogs=" + userBlogs +
                ", userMangas=" + userMangas +
                ", userComics=" + userComics +
                ", followers=" + followers +
                ", following=" + following +
                ", favoritePosts=" + favoritePosts +
                ", favoriteBlogs=" + favoriteBlogs +
                ", favoriteMangas=" + favoriteMangas +
                ", favoriteComics=" + favoriteComics +
                ", userRatings=" + userRatings +
                '}';
    }

}
