package com.example.demo.repositories;

import com.example.demo.entities.Blog;
import com.example.demo.entities.Post;
import com.example.demo.entities.Profile;
import com.example.demo.entities.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProfileRepository extends MongoRepository<Profile, String> {



    @Query(fields = "{userPosts: 1}")
    Profile findUserPostsById(String id);

    @Query(fields = "{userBlogs: 1}")
    Profile findUserBlogsById(String id);

    @Query(fields = "{id:0, followers:1}")
    Profile findFollowersById(String id);

    @Query(fields = "{following: 1}")
    Profile findFollowingById(String id);

    @Query(fields = "{favoritePosts: 1}")
    Profile findFavoritePostsById(String id);

    @Query(fields = "{favoriteBlogs: 1}")
    Profile findFavoriteBlogsById(String id);
}
