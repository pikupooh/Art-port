package com.example.demo.entities;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

import com.fasterxml.jackson.annotation.JsonBackReference;

public class TestUser {
	
	
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<TestItem> getUserItems() {
		return userItems;
	}

	public void setUserItems(List<TestItem> userItems) {
		this.userItems = userItems;
	}

	public TestUser(int id, String name) {
		super();
		this.id = id;
		this.name = name;
		this.userItems = new ArrayList<TestItem>();
	}

	@Id
    public int id;
    public String name;

    @JsonBackReference
    @DBRef
    public List<TestItem> userItems; 
    
    public void addItem(TestItem item) {
    	userItems.add(item);
    }

	@Override
	public String toString() {
		return "TestUser [id=" + id + ", name=" + name + ", userItems=" + userItems + "]";
	}
    
} 
