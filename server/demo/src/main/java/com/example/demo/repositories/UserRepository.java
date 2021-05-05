package com.example.demo.repositories;

import com.example.demo.entities.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {

    Optional<User> findByUsername(String username);
    //List<User> findbyFirstName(String firstName);
    //List<User> findbyLastName(String lastName);
    //User findbyEmail(String Email);
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);

}
