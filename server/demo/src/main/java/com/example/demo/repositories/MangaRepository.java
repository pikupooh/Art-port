package com.example.demo.repositories;

import com.example.demo.entities.Manga;
import com.example.demo.entities.Type;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface MangaRepository extends MongoRepository<Manga, String> {

    @Query(fields = "{'type': 0}")
    List<Manga> findMangaByType(Type type);
    
    @Query(value = "{ 'type': 'MANGA', 'category' : {$in : ?0 }}")
    List<Manga> findMangaByCategory(String[] category);
    
    @Query(value = "{ 'type': 'COMIC', 'category' : {$in : ?0 }}")
    List<Manga> findComicByCategory(String[] category);

    @Query(fields = "{rating: 1, ratingCount: 1}")
    Manga findRatingById(String id);

}
