package com.example.demo.controller;

import com.example.demo.entities.User;
import com.example.demo.entities.VerificationToken;
import com.example.demo.payload.request.LoginRequest;
import com.example.demo.payload.request.SignUpRequest;
import com.example.demo.payload.response.JwtResponse;
import com.example.demo.repositories.UserRepository;
import com.example.demo.repositories.VerificationTokenRepository;
import com.example.demo.security.jwt.JwtConfig;
import com.example.demo.security.services.EmailService;
import com.example.demo.security.services.UserDetailsImpl;
import com.example.demo.services.ProfileService;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Calendar;

@CrossOrigin
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
     UserRepository userRepository;

    @Autowired
    VerificationTokenRepository verificationTokenRepository;

    @Autowired
    UserService userService;

    @Autowired
    ProfileService profileService;

    @Autowired
    private EmailService emailService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtConfig jwtConfig;


    @GetMapping("/users/{userId}")
    public ResponseEntity<?> getUser(@PathVariable String userId){

        User user = userService.getUser(userId);
        if(user == null){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(user);
    }

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

        User user = new User(signUpRequest.getUsername(), signUpRequest.getFirstName(), signUpRequest.getLastName(), signUpRequest.getEmail(), passwordEncoder.encode(signUpRequest.getPassword()), signUpRequest.getDateOfBirth());
        System.out.println("REached here");
        userRepository.save(user);
        System.out.println("here");

        VerificationToken verificationToken = new VerificationToken(user);
        verificationTokenRepository.save(verificationToken);

        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(user.getEmail());
        mailMessage.setSubject("Complete Your Registration!");
        mailMessage.setText("To confirm your account, please click here: " +
                "http://localhost:8080/api/auth/confirm-account?token=" + verificationToken.getToken());

        emailService.sendEmail(mailMessage);

        profileService.createProfile(user);
        return ResponseEntity.ok("User registered successfully");
    }

    @GetMapping("/confirm-account")
    public ResponseEntity<?> confirmUserAccount(@RequestParam("token") String token){

        VerificationToken verificationToken = verificationTokenRepository.findByToken(token);

        if(verificationToken == null) {

            return new ResponseEntity<String>("Invalid Token.", HttpStatus.NOT_FOUND);
        }

        User user = verificationToken.getUser();
        Calendar calendar = Calendar.getInstance();
        if((verificationToken.getExpiryDate().getTime() - calendar.getTime().getTime()) <= 0){

            return  new ResponseEntity<String>("Token has expired.", HttpStatus.UNAUTHORIZED);
        }

        user.setEnabled(true);
        userRepository.save(user);


        return ResponseEntity.ok("Account activated. Please return to login page.");
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
