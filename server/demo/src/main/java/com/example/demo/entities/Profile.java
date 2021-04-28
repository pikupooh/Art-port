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
    @DBRef
    private List<Post> userPosts;
    @DBRef
    private List<User> followers;
    @DBRef
    private List<User> following;
    @DBRef
    private List<Post> favoritePosts;
    @DBRef
    private List<Blog> userBlogs;
    @DBRef
    private List<Blog> favoriteBlogs;

    public Profile() {

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

    public void removeBlog(Blog blog){

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


	@Override
    public String toString() {
        return "Profile{" +
                "userPosts=" + userPosts +
                ", followers=" + followers +
                ", following=" + following +
                ", favoritePosts=" + favoritePosts +
                ", userBlogs=" + userBlogs +
                ", favoriteBlogs=" + favoriteBlogs +
                '}';
    }
}
