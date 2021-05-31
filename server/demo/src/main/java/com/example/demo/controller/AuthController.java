package com.example.demo.controller;

import com.example.demo.entities.Image;
import com.example.demo.entities.RefreshToken;
import com.example.demo.entities.User;
import com.example.demo.entities.VerificationToken;
import com.example.demo.exception.TokenRefreshException;
import com.example.demo.payload.request.LoginRequest;
import com.example.demo.payload.request.SignUpRequest;
import com.example.demo.payload.request.TokenRefreshRequest;
import com.example.demo.payload.response.JwtResponse;
import com.example.demo.payload.response.TokenRefreshResponse;
import com.example.demo.repositories.ImageRepository;
import com.example.demo.repositories.UserRepository;
import com.example.demo.repositories.VerificationTokenRepository;
import com.example.demo.security.jwt.JwtConfig;
import com.example.demo.security.services.EmailService;
import com.example.demo.security.services.UserDetailsImpl;
import com.example.demo.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpCookie;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.io.IOException;
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
    ImageRepository imageRepository;

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

    @Autowired
    private FileService fileService;

    @Autowired
    private ImageService imageService;

    @Autowired
    private RefreshTokenService refreshTokenService;

    @GetMapping("/users/{userId}")
    public ResponseEntity<?> getUser(@PathVariable String userId){

        User user = userService.getUser(userId);
        if(user == null){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(user);
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @ModelAttribute SignUpRequest signUpRequest) throws Exception {

        System.out.println(signUpRequest.getEmail());
        if(userRepository.existsByUsername((signUpRequest.getUsername()))){

            return new ResponseEntity<String>("Username is already taken", HttpStatus.CONFLICT);
        }

        if(userRepository.existsByEmail(signUpRequest.getEmail())){

            return new ResponseEntity<String>("Email is already in use", HttpStatus.CONFLICT);

        }

        User user = new User(signUpRequest.getUsername(), signUpRequest.getFirstName(), signUpRequest.getLastName(), signUpRequest.getEmail(), passwordEncoder.encode(signUpRequest.getPassword()), signUpRequest.getAbout(), signUpRequest.getDateOfBirth());

        MultipartFile image = signUpRequest.getImage();

        String imageId = fileService.save(image.getBytes(), image.getName());
        user.setProfilePhoto(imageService.getimage(imageId));

        userRepository.save(user);
        System.out.println(user);
        VerificationToken verificationToken = new VerificationToken(user);
        verificationTokenRepository.save(verificationToken);

        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(user.getEmail());
        mailMessage.setSubject("Complete Your Registration!");
        mailMessage.setText("To confirm your account, please click here: " +
                "api/api/auth/confirm-account?token=" + verificationToken.getToken());

        emailService.sendEmail(mailMessage);

        profileService.createProfile(user);
        return ResponseEntity.ok(user);
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

        verificationTokenRepository.delete(verificationToken);

        return ResponseEntity.ok("Account activated. Please return to login page.");
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest){
        Authentication authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authenticate);
        String jwtToken = jwtConfig.generateJwtToken(authenticate);
        UserDetailsImpl userDetails = (UserDetailsImpl) authenticate.getPrincipal();

        RefreshToken refreshToken = refreshTokenService.createRefreshToken(userDetails.getId());

        return ResponseEntity.ok(new JwtResponse(jwtToken, userDetails.getId(), userDetails.getUsername(), userDetails.getEmail(), userDetails.getProfilePhoto(), refreshToken.getToken()));
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(HttpServletRequest servletRequest, @RequestBody User user){

        User existingUser = userRepository.findByEmailIgnoreCase(user.getEmail());

        if(existingUser == null)
            return new ResponseEntity<String>("Email invalid", HttpStatus.NOT_FOUND);

        VerificationToken verificationToken = new VerificationToken(existingUser);
        verificationTokenRepository.save(verificationToken);

        String appUrl = "http://" + servletRequest.getServerName() + ":" + servletRequest.getServerPort() + servletRequest.getContextPath();
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(existingUser.getEmail());
        mailMessage.setSubject("Complete Password Reset!");
        mailMessage.setText("To complete the password reset process, please click here: "
                + appUrl + "/confirm-reset?token="+verificationToken.getToken());

        emailService.sendEmail(mailMessage);

        return ResponseEntity.ok("Password reset link sent to registered email.");
    }

    @GetMapping("/confirm-reset")
    public RedirectView validateToken(@RequestParam("token") String token){

        VerificationToken verificationToken = verificationTokenRepository.findByToken(token);

        /*if(verificationToken == null)
            return "Invalid Token";
        */
        //User user = userRepository.findByEmailIgnoreCase(verificationToken.getUser().getEmail());

        RedirectView redirectView = new RedirectView();
        redirectView.setUrl("http://localhost:3000/");
        return redirectView;

    }


    @PostMapping("/refreshtoken")
    public ResponseEntity<?> refreshtoken(@Valid @RequestBody TokenRefreshRequest request) {
        String requestRefreshToken = request.getRefreshToken();

        return refreshTokenService.findByToken(requestRefreshToken)
                .map(refreshTokenService::verifyExpiration)
                .map(RefreshToken::getUser)
                .map(user -> {
                    String token = jwtConfig.generateTokenFromUsername(user.getUsername());
                    return ResponseEntity.ok(new TokenRefreshResponse(token, requestRefreshToken));
                })
                .orElseThrow(() -> new TokenRefreshException(requestRefreshToken,
                        "Refresh token is not in database!"));
    }

}
