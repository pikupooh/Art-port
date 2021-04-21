package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.TestItem;
import com.example.demo.entities.TestUser;
import com.example.demo.repositories.TestItemRepository;
import com.example.demo.repositories.TestUserRepository;

@RestController
@RequestMapping("/test")
public class TestController {
	@Autowired
	TestUserRepository testuserRepository;
	@Autowired
	TestItemRepository testItemRepository;
    @GetMapping
    public String getTest(){

        return "Hello World";
    }
    
    @RequestMapping("/fool")
    public String getFool(){
    	
        return "Fools World";
    }
    
    @GetMapping("/user")
    public String setUser() {
    	TestUser t1 = new TestUser(324324, "one");
    	TestItem i1 = new TestItem(1234235, "i1", t1);
    	testItemRepository.save(i1);
    	TestItem i2 = new TestItem(324245656, "i2", t1);
    	
    	testItemRepository.save(i2);
    	t1.addItem(i1);
    	t1.addItem(i2);
    	testuserRepository.save(t1);
		return t1.toString();
    }

}
