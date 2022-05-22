package com.example.rgr.entity;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Builder
@Table(name = "chat")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Chat  {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @ManyToMany(mappedBy = "user-chat")
    List<User> users;

    @Column(name = "chatID", nullable = false)
    private String chatID;

    @Column(name = "type", nullable = false)
    private String type;

    @Column(name = "attachedFilesID")
    private String attachedFilesID;

    @Column(name = "isAdmin", nullable = false)
    private String isAdmin;


}
