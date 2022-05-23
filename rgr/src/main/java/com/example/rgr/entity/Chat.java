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
    @Column(name = "chat_id", nullable = false)
    private String id;

    @Column(name = "type", nullable = false)
    private String type;

    @OneToMany(mappedBy = "chat")
    private List<AttachedFile> attachedFiles;

    @Column(name = "isAdmin", nullable = false)
    private String isAdmin;

    @OneToMany(mappedBy = "chat")
    private List<Message> messages;

    @ManyToMany
    @JoinTable(
            name = "user_chat",
            joinColumns = @JoinColumn(name = "chat_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    List<User> users;


}
