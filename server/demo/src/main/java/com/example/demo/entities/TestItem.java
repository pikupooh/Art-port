package com.example.demo.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

import com.fasterxml.jackson.annotation.JsonManagedReference;

public class TestItem {
	
	public TestItem(int id, String itemName, TestUser owner) {
		super();
		this.id = id;
		this.itemName = itemName;
		this.owner = owner;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getItemName() {
		return itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	public TestUser getOwner() {
		return owner;
	}

	public void setOwner(TestUser owner) {
		this.owner = owner;
	}

	@Id
    public int id;
    public String itemName;

    @JsonManagedReference
    @DBRef
    public TestUser owner;

	@Override
	public String toString() {
		return "TestItem [id=" + id + ", itemName=" + itemName + ", owner=" + owner.name + "]";
	} 
 }
