package com.example.demo.repositories;

import com.example.demo.entities.Image;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.nio.file.Path;

@Repository
public interface ImageRepository extends MongoRepository<Image, String> {

}
