package com.example.demo.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "user_profile")
public class Profile {

    @Id
    private String id;
    private String username;
    @DBRef
    private List<Post> userPosts;
    @DBRef
    private List<Profile> followers;
    @DBRef
    private List<Profile> following;
    @DBRef
    private List<Post> favoritePosts;
    @DBRef
    private List<Blog> userBlogs;
    @DBRef
    private List<Blog> favoriteBlogs;

    public Profile() {
    	
    	this.username = "";
        this.userPosts = new ArrayList<>();
        this.followers = new ArrayList<>();
        this.following = new ArrayList<>();
        this.favoritePosts = new ArrayList<>();
        this.userBlogs = new ArrayList<>();
        this.favoriteBlogs = new ArrayList<>();

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

    public List<Profile> getFollowers() {
        return followers;
    }

    public void setFollowers(List<Profile> followers) {
        this.followers = followers;
    }

    public List<Profile> getFollowing() {
        return following;
    }

    public void setFollowing(List<Profile> following) {
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

    public void removeBlog(Blog blog){

        this.userBlogs.remove(blog);
    }

    public void addFavoriteBlog(Blog blog){

        this.favoriteBlogs.add(blog);
    }

    public void removeFavoriteBlog(Blog blog){

        this.favoriteBlogs.remove(blog);
    }

    public void addFollower(Profile user){

        this.followers.add(user);
    }

    public void addFollowing(Profile user){

        this.following.add(user);
    }

    public void removeFollower(Profile user){

        this.followers.remove(user);
    }

    public void removeFollowing(Profile user){

        this.following.remove(user);
    }

 

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	
	@Override
    public String toString() {
        return "Profile{" +
        		"username=" + username +
                "userPosts=" + userPosts +
                ", followers=" + followers +
                ", following=" + following +
                ", favoritePosts=" + favoritePosts +
                ", userBlogs=" + userBlogs +
                ", favoriteBlogs=" + favoriteBlogs +
                '}';
    }
}
