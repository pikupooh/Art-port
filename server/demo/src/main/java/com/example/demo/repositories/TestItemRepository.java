package com.example.demo.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.entities.TestItem;

public interface TestItemRepository extends MongoRepository<TestItem, String> {

}
