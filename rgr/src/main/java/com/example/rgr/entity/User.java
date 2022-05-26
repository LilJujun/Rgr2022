package com.example.rgr.entity;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
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

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinTable(name = "user_chat",
            joinColumns = {
                    @JoinColumn(name = "user_id", referencedColumnName = "id",
                            nullable = false, updatable = false)},
            inverseJoinColumns = {
                    @JoinColumn(name = "chat_id", referencedColumnName = "chat_id",
                            nullable = false, updatable = false)})

    private List<Chat> chats = new ArrayList<>();
}
