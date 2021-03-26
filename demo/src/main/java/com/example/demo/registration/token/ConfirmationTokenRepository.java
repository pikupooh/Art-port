package com.example.demo.registration.token;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional(readOnly = true)
public interface ConfirmationTokenRepository extends MongoRepository<ConfirmationToken, String>{
	Optional<ConfirmationToken> findByToken(String token);
}
