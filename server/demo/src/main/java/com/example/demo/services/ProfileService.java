package com.example.demo.services;

import com.example.demo.entities.Blog;
import com.example.demo.entities.Manga;
import com.example.demo.entities.Post;
import com.example.demo.entities.Profile;
import com.example.demo.entities.User;
import com.example.demo.payload.response.UserDTO;
import com.example.demo.repositories.ProfileRepository;
import com.example.demo.repositories.UserRepository;
import com.mongodb.client.result.UpdateResult;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
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

    @Autowired
    MongoTemplate mongoTemplate;

    public void createProfile(User user){
        Profile profile = new Profile();
        profile.setId(user.getId());
        profileRepository.save(profile);
    }

    public List<Profile> getAllProfiles(){

        return profileRepository.findAll();
    }

    public Profile getUserProfile(String id){

        Optional<Profile> profile = profileRepository.findById(id);

        return profile.orElse(null);

    }

    public List<Post> getUserPosts(String id){

        return profileRepository.findUserPostsById(id).getUserPosts();
    }

    public List<Blog> getUserBlogs(String id){

        return profileRepository.findUserBlogsById(id).getUserBlogs();
    }
    
    public List<Manga> getUserMangas(String id){

        return profileRepository.findUserMangasById(id).getUserMangas();
    }
    
    public List<Manga> getUserComics(String id){

        return profileRepository.findUserComicsById(id).getUserMangas();
    }

    public List<UserDTO> getFollowers(String id){


        List<UserDTO> userDTOList = new ArrayList<>();
        List<User> followers = profileRepository.findFollowersById(id).getFollowers();
        followers.forEach((user) -> {
            UserDTO userDTO = new UserDTO(user.getId(), user.getUsername(), user.getFirstName(), user.getLastName(), user.getProfilePhoto());
            userDTOList.add(userDTO);
        });

        return userDTOList;
    }

    public List<UserDTO> getFollowing(String id){

        List<UserDTO> userDTOList = new ArrayList<>();
        List<User> following = profileRepository.findFollowingById(id).getFollowing();
        following.forEach((user) -> {
            UserDTO userDTO = new UserDTO(user.getId(), user.getUsername(), user.getFirstName(), user.getLastName(), user.getProfilePhoto());
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

    public List<Manga> getFavoriteMangas(String id){

        return profileRepository.findFavoriteMangasById(id).getFavoriteMangas();
    }
    
    public List<Manga> getFavoriteComics(String id){

        return profileRepository.findFavoriteComicsById(id).getFavoriteMangas();
    }
    
    public User addFollower(String userId, String followerId){


        Optional<User> user = userRepository.findById(userId);
        Optional<User> follower = userRepository.findById(followerId);
        System.out.println(follower.isPresent());
        /*
        Profile profile = profileRepository.findById(userId).get();
        profile.addFollowing(follower.get());
        profileRepository.save(profile);

        Profile profile1 = profileRepository.findById(followerId).get();
        profile1.addFollower(user.get());
        profileRepository.save(profile1);
        */


        Profile profile = profileRepository.findFollowingById(userId);

        /*
        Query query = new Query(Criteria.where("id").is(userId));
        query.fields().include("following").exclude("id");
        Profile profile = mongoTemplate.findOne(query, Profile.class);
    */
        Profile profile1 = profileRepository.findFollowersById(followerId);
        /*query = new Query(Criteria.where("id").is(followerId));
        query.fields().include("followers").exclude("id");
        Profile profile1 = mongoTemplate.findOne(query, Profile.class);*/

        System.out.println(profileRepository.findFollowingById(followerId));
        profile.addFollowing(follower.get());
        profile1.addFollower(user.get());

        Query query = Query.query(Criteria.where("id").is(userId));
        Update update = new Update();
        update.set("following", profile.getFollowing());

        UpdateResult updateResult = mongoTemplate.updateFirst(query, update, Profile.class);
        System.out.println(updateResult);


        System.out.println(profileRepository.findFollowingById(followerId));

        query = Query.query(Criteria.where("id").is(followerId));
        Update update1 = new Update();
        update1.set("followers", profile1.getFollowers());
        updateResult = mongoTemplate.updateFirst(query, update1, Profile.class);
        System.out.println(updateResult);

        System.out.println(profileRepository.findFollowingById(followerId));

        return follower.get();
    }

    public void deleteFollower(String userId, String followerId){

        Optional<User> user = userRepository.findById(userId);
        Optional<User> follower = userRepository.findById(followerId);

        System.out.println(follower.get());
        Profile profile = profileRepository.findFollowingById(userId);

        profile.removeFollowing(follower.get());
        System.out.println(profile.getFollowing());

        Query query = Query.query(Criteria.where("id").is(userId));
        Update update = new Update();
        update.set("following", profile.getFollowing());

        UpdateResult updateResult = mongoTemplate.updateFirst(query, update, Profile.class);
        System.out.println(updateResult);

        Profile profile1 = profileRepository.findFollowersById(followerId);

        profile1.removeFollower(user.get());
        System.out.println(profile1.getFollowers());

        query = Query.query(Criteria.where("id").is(followerId));
        Update update1 = new Update();
        update1.set("followers", profile1.getFollowers());
        updateResult = mongoTemplate.updateFirst(query, update1, Profile.class);
        System.out.println(updateResult);

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

    public void addFavoriteManga(String id, Manga manga){

        Profile profile = profileRepository.findById(id).get();
        profile.addFavoriteManga(manga);
        profileRepository.save(profile);
    }

    public void deleteFavoriteManga(String id, Manga manga){

        Profile profile = profileRepository.findById(id).get();
        System.out.println(manga);
        profile.removeFavoriteManga(manga);
        profileRepository.save(profile);
    }
    
    public void addFavoriteComic(String id, Manga manga){

        Profile profile = profileRepository.findById(id).get();
        profile.addFavoriteComic(manga);
        profileRepository.save(profile);
    }

    public void deleteFavoriteComic(String id, Manga manga){

        Profile profile = profileRepository.findById(id).get();
        System.out.println(manga);
        profile.removeFavoriteComic(manga);
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
        profile.deleteBlog(blog);
        profileRepository.save(profile);
    }
    
    public void addManga(String id, Manga manga){

        Profile profile = profileRepository.findById(id).get();
        profile.addManga(manga);
        profileRepository.save(profile);
    }
    
    public void addComic(String id, Manga manga){

        Profile profile = profileRepository.findById(id).get();
        profile.addComic(manga);
        profileRepository.save(profile);
    }

    public void removeManga(String id, Manga manga){

        Profile profile = profileRepository.findById(id).get();
        profile.deleteManga(manga);
        profileRepository.save(profile);
    }
    
    public void removeComic(String id, Manga manga){

        Profile profile = profileRepository.findById(id).get();
        profile.deleteComic(manga);
        profileRepository.save(profile);
    }
    
    public void save(Profile profile) {
    	profileRepository.save(profile);
    }
}
