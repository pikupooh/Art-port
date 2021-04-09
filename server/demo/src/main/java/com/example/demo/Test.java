package com.example.demo;

import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Test {

    @Autowired
    private UserRepository repository;

    @GetMapping("/")
    public void run(String args[]){

        System.out.println("-----");
        User obj = new User();

        obj.setId("4");
        obj.setFirstName("First name");
        obj.setLastName("Def");
        System.out.println("Created");
        repository.save(obj);
        System.out.println("Saved");
        for(User user: repository.findAll())
            System.out.println(user);
    }
}
