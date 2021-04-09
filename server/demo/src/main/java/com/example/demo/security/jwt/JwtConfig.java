package com.example.demo.security.jwt;

import com.example.demo.security.services.UserDetailsImpl;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtConfig {

    private static final Logger logger = LoggerFactory.getLogger(JwtConfig.class);

    @Value("${demo.app.secretKey}")
    String secretKey;

    @Value("${demo.app.jwtExpirationInMilliseconds}")
    int jwtExpirationInMilliseconds;

    public String generateJwtToken(Authentication authentication){

        UserDetailsImpl userPrincipal = (UserDetailsImpl) authentication.getPrincipal();

        return Jwts.builder()
                .setSubject(userPrincipal.getUsername())
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime() + jwtExpirationInMilliseconds))
                .signWith(SignatureAlgorithm.HS512, secretKey)
                .compact();
    }


    public String getUserNameFromToken(String token){

        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
    }

    public boolean validateJwtToken(String token){

        try{

            System.out.println(secretKey);
            System.out.println(token.startsWith(" "));
            JwtParser parser = Jwts.parser();
            JwtParser jwtParser = parser.setSigningKey(secretKey);
            Jws<Claims> claimsJws = jwtParser.parseClaimsJws(token);
            return true;
        }
        catch(SignatureException e){
            logger.error("Invald JWT signature: {}", e.getMessage());
        }
        catch (MalformedJwtException e){
            logger.error("Invalid JWT token: {}", e.getMessage());
        }
        catch (ExpiredJwtException e){
            logger.error("JWT token is expired: {}", e.getMessage());
        }
        catch (UnsupportedJwtException e){
            logger.error("JWT token is unsupported: {}", e.getMessage());
        }
        catch(IllegalArgumentException e){
            logger.error("JWT claims string is empty: {]", e.getMessage());
        }
        return false;
    }
}
