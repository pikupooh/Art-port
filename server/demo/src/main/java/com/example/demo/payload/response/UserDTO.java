package com.example.demo.payload.response;

<<<<<<< HEAD
import com.example.demo.entities.Image;
=======
import java.util.Objects;
>>>>>>> d050b00e1323082e292388dcd058cd32b4d2b61f

public class UserDTO {

    private String userId;
    private String username;
    private Image profilePhoto;

    public UserDTO() {
    }

    public UserDTO(String userId, String username) {
        this.userId = userId;
        this.username = username;
    }

    public UserDTO(String userId, String username, Image profilePhoto) {
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

    public Image getProfilePhoto() {
        return profilePhoto;
    }

    public void setProfilePhoto(Image profilePhoto) {
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
