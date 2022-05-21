package com.example.rgr.model;

import javax.persistence.*;

@Entity
@Table(name ="user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column( name = "ID", nullable = false)

    private Long ID;
    private String nickname;
    private String email;
    private String password;
    private String photo;
    private String status;

    @Override
    public String toString() {
        return "User{" +
                "ID=" + ID +
                ", nickname='" + nickname + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

    public User() {
    }

    public User(Long ID, String nickname, String email, String password, String photo, String status) {
        this.ID = ID;
        this.nickname = nickname;
        this.email = email;
        this.password = password;
        this.photo = photo;
        this.status = status;
    }

    public Long getID() {
        return ID;
    }

    public void setID(long ID) {
        this.ID = ID;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }



}
