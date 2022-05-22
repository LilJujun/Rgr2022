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
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column( name = "ID", nullable = false)

    @ManyToMany(cascade = CascadeType.ALL, mappedBy = "userID")
    private List<Chat> chats;

    private Long ID;
    private String nickname;
    private String email;
    private String password;
    private String photo;
    private String status;
}
