package com.example.rgr.entity;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@ToString
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name ="user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String nickname;
    private String email;
    private String password;
    private String birthDate;
    private String photo;
    private String status;
    private boolean enabled;

    public boolean isEnabled() {
        return enabled;
    }

    @OneToMany(mappedBy = "user")
    private List<Message> messages;


    @ManyToMany(mappedBy = "users", fetch = FetchType.LAZY)
    private Set<Chat> chats = new HashSet<>();
}
