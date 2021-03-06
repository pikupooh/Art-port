package com.example.demo.services;

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

        User user1 = userRepository.findById(id).get();
        if(user1 == null)
            return null;

        user1.setFirstName(user.getFirstName());
        user1.setLastName(user.getLastName());
        user1.setAbout(user.getAbout());

        userRepository.save(user1);
        return user;
    }
    
    public User save(User user) {
    	return userRepository.save(user);
    }

}
