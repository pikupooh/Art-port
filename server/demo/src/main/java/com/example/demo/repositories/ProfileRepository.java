package com.example.demo.repositories;

import com.example.demo.entities.Profile;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface ProfileRepository extends MongoRepository<Profile, String> {



    @Query(fields = "{userPosts: 1}")
    Profile findUserPostsById(String id);

    @Query(fields = "{userBlogs: 1}")
    Profile findUserBlogsById(String id);
    
    @Query(fields = "{userMangas: 1}")
    Profile findUserMangasById(String id);

    @Query(fields = "{id:0, followers:1}")
    Profile findFollowersById(String id);

    @Query(fields = "{following: 1}")
    Profile findFollowingById(String id);

    @Query(fields = "{favoritePosts: 1}")
    Profile findFavoritePostsById(String id);

    @Query(fields = "{favoriteBlogs: 1}")
    Profile findFavoriteBlogsById(String id);
    
    @Query(fields = "{favoriteMangas: 1}")
    Profile findFavoriteMangasById(String id);
}
