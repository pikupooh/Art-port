package com.example.demo.registration.token;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ConfirmationTokenService {

	private final ConfirmationTokenRepository confirmationTokenRepository;
	
	public void saveConfirmationToken(ConfirmationToken token) {
		confirmationTokenRepository.save(token);
	}
	
	public Optional<ConfirmationToken> getToken(String token) {
        return confirmationTokenRepository.findByToken(token);
    }

	public int setConfirmedAt(String token) {
		Optional<ConfirmationToken> tokenLooked = confirmationTokenRepository.findByToken(token);
		if(tokenLooked.isPresent())
        {
			ConfirmationToken tokenToUpdate = tokenLooked.get();
			
			tokenToUpdate.setConfirmedAt(LocalDateTime.now());
			saveConfirmationToken(tokenToUpdate);
			return 0;
        }
        return -1;
	}
}
