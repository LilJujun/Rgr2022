package com.example.rgr.entity;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
    @Column(name = "id", nullable = false)
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


    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "user_chat",
            joinColumns = {
            @JoinColumn(name = "chat_id", referencedColumnName = "id",
                    nullable = false, updatable = false)}
                    ,
            inverseJoinColumns = {
            @JoinColumn(name = "user_id", referencedColumnName = "id",
                    nullable = false, updatable = false)}
                    )
    Set<User> users = new HashSet<>();


}
