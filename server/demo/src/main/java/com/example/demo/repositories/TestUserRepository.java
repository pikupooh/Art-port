package com.example.demo.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.entities.TestUser;

public interface TestUserRepository extends MongoRepository<TestUser, String> {

}
