package com.example.demo.repositories;

import com.example.demo.entities.Chapter;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ChapterRepository extends MongoRepository<Chapter, String> {

}
