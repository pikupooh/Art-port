package com.example.demo.services;

import com.example.demo.entities.Post;
import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public List<User> getAllUsers(){

        return userRepository.findAll();
    }

    public User getUser(String id){

        Optional<User> user = userRepository.findById(id);
        return user.orElse(null);
    }

    public User getUserByName(String name){

        Optional<User> user = userRepository.findByUsername(name);
        return user.orElse(null);
    }
    public void deleteAllUsers(){

        userRepository.deleteAll();
    }

    public User deleteUser(String id){

        Optional<User> user = userRepository.findById(id);
        if(user.isPresent())
            userRepository.deleteById(id);
        else
            return null;
        return user.get();
    }

    public User updateUser(User user, String id){

        Optional<User> user1 = userRepository.findById(id);
        if(!user1.isPresent())
            return null;

        user.setId(id);
        userRepository.save(user);

        return user;
    }

}
