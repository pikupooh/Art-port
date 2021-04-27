package com.example.demo.payload.response;

import java.util.Objects;

public class UserDTO {

    private String userId;
    private String username;
    private String profilePhoto;

    public UserDTO() {
    }

    public UserDTO(String userId, String username) {
        this.userId = userId;
        this.username = username;
    }

    public UserDTO(String userId, String username, String profilePhoto) {
        this.userId = userId;
        this.username = username;
        this.profilePhoto = profilePhoto;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getProfilePhoto() {
        return profilePhoto;
    }

    public void setProfilePhoto(String profilePhoto) {
        this.profilePhoto = profilePhoto;
    }

    @Override
    public String toString() {
        return "UserDTO{" +
                "userId='" + userId + '\'' +
                ", username='" + username + '\'' +
                ", profilePhoto='" + profilePhoto + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserDTO userDTO = (UserDTO) o;
        return userId.equals(userDTO.userId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId);
    }
}
