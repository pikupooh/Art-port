package com.example.demo.services;

import com.example.demo.entities.Blog;
import com.example.demo.entities.Post;
import com.example.demo.entities.Profile;
import com.example.demo.entities.User;
import com.example.demo.payload.response.UserDTO;
import com.example.demo.repositories.ProfileRepository;
import com.example.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProfileService {

    @Autowired
    ProfileRepository profileRepository;

    @Autowired
    UserRepository userRepository;

    public void createProfile(User user){
        Profile profile = new Profile();
        profile.setId(user.getId());
        profileRepository.save(profile);
    }

    public List<Profile> getAllProfiles(){

        return profileRepository.findAll();
    }

    public Profile getUserProfile(String id){

        return profileRepository.findById(id).get();
    }

    public List<Post> getUserPosts(String id){

        return profileRepository.findUserPostsById(id).getUserPosts();
    }

    public List<Blog> getUserBlogs(String id){

        return profileRepository.findUserBlogsById(id).getUserBlogs();
    }

    public List<UserDTO> getFollowers(String id){


        List<UserDTO> userDTOList = new ArrayList<>();
        List<User> followers = profileRepository.findFollowersById(id).getFollowers();
        followers.forEach((user) -> {
            UserDTO userDTO = new UserDTO(user.getId(), user.getUsername(), user.getProfilePhoto());
            userDTOList.add(userDTO);
        });

        return userDTOList;
    }

    public List<UserDTO> getFollowing(String id){

        List<UserDTO> userDTOList = new ArrayList<>();
        List<User> following = profileRepository.findFollowingById(id).getFollowing();
        following.forEach((user) -> {
            UserDTO userDTO = new UserDTO(user.getId(), user.getUsername(), user.getProfilePhoto());
            userDTOList.add(userDTO);
            System.out.println(userDTOList);
        });

        System.out.println(userDTOList);
        return userDTOList;
    }

    public List<Post> getFavoritePosts(String id){

        return profileRepository.findFavoritePostsById(id).getFavoritePosts();
    }

    public List<Blog> getFavoriteBlogs(String id){

        return profileRepository.findFavoriteBlogsById(id).getFavoriteBlogs();
    }

    public void addFollower(String userId, String followerId){


        Optional<User> user = userRepository.findById(userId);
        Optional<User> follower = userRepository.findById(followerId);

        Profile profile = profileRepository.findById(userId).get();
        profile.addFollowing(follower.get());
        profileRepository.save(profile);

        Profile profile1 = profileRepository.findById(followerId).get();
        profile1.addFollower(user.get());
        profileRepository.save(profile1);
    }

    public void deleteFollower(String userId, String followerId){

        Optional<User> user = userRepository.findById(userId);
        Optional<User> follower = userRepository.findById(followerId);


        Profile profile = profileRepository.findById(userId).get();
        profile.removeFollowing(follower.get());
        profileRepository.save(profile);

        Profile profile1 = profileRepository.findById(followerId).get();
        profile1.removeFollower(user.get());
        profileRepository.save(profile1);


    }

    public void addFavoritePost(String id, Post post){

        Profile profile = profileRepository.findById(id).get();
        profile.addFavoritePost(post);
        profileRepository.save(profile);
    }

    public void deleteFavoritePost(String id, Post post){

        Profile profile = profileRepository.findById(id).get();
        System.out.println(post);
        profile.removeFavoritePost(post);
        profileRepository.save(profile);
    }

    public void addFavoriteBlog(String id, Blog blog){

        Profile profile = profileRepository.findById(id).get();
        profile.addFavoriteBlog(blog);
        profileRepository.save(profile);
    }

    public void deleteFavoriteBlog(String id, Blog blog){

        Profile profile = profileRepository.findById(id).get();
        profile.removeFavoriteBlog(blog);
        profileRepository.save(profile);
    }

    public void addPost(String id, Post post){

        Profile profile = profileRepository.findById(id).get();
        profile.addPost(post);
        profileRepository.save(profile);
    }

    public void removePost(String id, Post post){

        Profile profile = profileRepository.findById(id).get();
        profile.deletePost(post);
        profileRepository.save(profile);
    }

    public void addBlog(String id, Blog blog){

        Profile profile = profileRepository.findById(id).get();
        profile.addBlog(blog);
        profileRepository.save(profile);
    }

    public void removeBlog(String id, Blog blog){

        Profile profile = profileRepository.findById(id).get();
        profile.removeBlog(blog);
        profileRepository.save(profile);
    }
}