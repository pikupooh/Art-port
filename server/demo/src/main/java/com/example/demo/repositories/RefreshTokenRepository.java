package com.example.demo.repositories;

import com.example.demo.entities.RefreshToken;
import com.example.demo.entities.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface RefreshTokenRepository extends MongoRepository<RefreshToken, String> {

    @Override
    Optional<RefreshToken> findById(String id);

    Optional<RefreshToken> findByToken(String token);

    int deleteByUser(User user);
}
