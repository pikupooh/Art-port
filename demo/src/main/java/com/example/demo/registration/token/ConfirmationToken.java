package com.example.demo.registration.token;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.lang.NonNull;

import com.example.demo.appuser.AppUser;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Document(collection="confirmation_token")
public class ConfirmationToken {

	@Id
	private String id;
	@NonNull
	private String token;
	@NonNull
	private LocalDateTime createdAt;
	@NonNull
	private LocalDateTime expiresAt;
	
	private LocalDateTime confirmedAt;
	
	@DBRef
	@NonNull
	private AppUser appUser;

	public ConfirmationToken(String token, LocalDateTime createdAt, LocalDateTime expiresAt, AppUser appUser) {
		super();
		this.token = token;
		this.createdAt = createdAt;
		this.expiresAt = expiresAt;
		this.appUser = appUser;
	}
	
}
