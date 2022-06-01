package com.example.rgr.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@ToString
@Getter
@Setter
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@Table(name ="user")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String nickname;
    @Column(nullable = false, unique = true)
    private String email;
    @Column(nullable = false)
    private String password;
    private String birthDate;
    private String photo;
    private String status;
    private boolean enabled;

    public boolean isEnabled() {
        return enabled;
    }

    @OneToMany(cascade = CascadeType.ALL)
    private List<Message> messages;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "user_chat",
            joinColumns = {
            @JoinColumn(name = "user_id", referencedColumnName = "id",
                    nullable = false, updatable = false)}
            ,
            inverseJoinColumns = {
            @JoinColumn(name = "chat_id", referencedColumnName = "id",
                    nullable = false, updatable = false)}

    )
    private Set<Chat> chats = new HashSet<>();

    @ManyToMany(cascade = CascadeType.ALL)
    private Set<User> friends = new HashSet<>();

//    @OneToOne
//    @JoinColumn(name = "attachedFile_id")
//    private AttachedFile attachedFile;
}
