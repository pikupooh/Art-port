package com.example.demo.appuser;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional(readOnly = true)
public interface AppUserRepository extends MongoRepository<AppUser, String>{
	Optional<AppUser> findByEmail(String email);
}
