package com.example.demo.payload.response;

import com.example.demo.entities.Image;
import java.util.Objects;

public class UserDTO {

    private String id;
    private String username;
    private String firstName;
    private String lastName;
    private Image profilePhoto;

    public UserDTO() {
    }

    public UserDTO(String userId, String username, String firstName, String lastName) {
        this.id = userId;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public UserDTO(String userId, String username, String firstName, String lastName, Image profilePhoto) {
        this.id = userId;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.profilePhoto = profilePhoto;
    }

    public String getUserId() {
        return id;
    }

    public void setUserId(String userId) {
        this.id = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Image getProfilePhoto() {
        return profilePhoto;
    }

    public void setProfilePhoto(Image profilePhoto) {
        this.profilePhoto = profilePhoto;
    }

    @Override
    public String toString() {
        return "UserDTO{" +
                "userId='" + id + '\'' +
                ", username='" + username + '\'' +
                ", profilePhoto='" + profilePhoto + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserDTO userDTO = (UserDTO) o;
        return id.equals(userDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
}
