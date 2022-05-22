package com.example.rgr.entity;

import lombok.*;

import javax.persistence.*;
import java.util.List;

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
    private Long ID;

    @ManyToMany
    @JoinTable(
            name = "user-chat",
            joinColumns = @JoinColumn(name = "userID"),
            inverseJoinColumns = @JoinColumn(name = "chatID")
    )
    private List<Chat> chats;

    @OneToMany(mappedBy = "user")
    private List<Message> messages;


    private String nickname;
    private String email;
    private String password;
    private String photo;
    private String status;
}
