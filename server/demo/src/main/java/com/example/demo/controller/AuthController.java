package com.example.demo.controller;

import com.example.demo.entities.User;
import com.example.demo.payload.request.LoginRequest;
import com.example.demo.payload.request.SignUpRequest;
import com.example.demo.payload.response.JwtResponse;
import com.example.demo.repositories.UserRepository;
import com.example.demo.security.jwt.JwtConfig;
import com.example.demo.security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
     UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtConfig jwtConfig;

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest){

        System.out.println(signUpRequest.getEmail());
        if(userRepository.existsByUsername((signUpRequest.getUsername()))){

            return ResponseEntity.badRequest()
                    .body("Username is already taken");
        }

        if(userRepository.existsByEmail(signUpRequest.getEmail())){

            return  ResponseEntity.badRequest()
                    .body("Email is already in use");
        }

        User user = new User(signUpRequest.getUsername(), signUpRequest.getEmail(), passwordEncoder.encode(signUpRequest.getPassword()));
        System.out.println("REached here");
        userRepository.save(user);
        System.out.println("here");
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest){

        Authentication authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authenticate);

        String jwtToken = jwtConfig.generateJwtToken(authenticate);
        
        UserDetailsImpl userDetails = (UserDetailsImpl) authenticate.getPrincipal();

        return ResponseEntity.ok(new JwtResponse(jwtToken, userDetails.getId(), userDetails.getUsername(), userDetails.getEmail()));
    }
}
