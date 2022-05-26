package com.example.rgr.entity;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
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
    private Long id;

    @Column(name = "type", nullable = false)
    private String type;

    @Column(name = "name", nullable = false)
    private String name;

    @OneToMany(mappedBy = "chat")
    private List<AttachedFile> attachedFiles;

    @Column(name = "isAdmin", nullable = false)
    private Long isAdmin;

    @Column(name = "description")
    private String description;

    @Column(name = "chatPhoto")
    private String photoPath;

    @OneToMany
    private List<Message> messages;

    @ManyToMany(mappedBy = "chats", fetch = FetchType.LAZY)
    List<User> users = new ArrayList<>();


}
