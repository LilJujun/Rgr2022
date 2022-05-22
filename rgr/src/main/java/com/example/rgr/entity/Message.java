package com.example.rgr.entity;

import com.example.rgr.model.MessageStatus;
import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name ="message")
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;

    private Date date;
    private String content;
    private String attachedFiles;
    private MessageStatus status;

    @ManyToOne
    private Chat chat;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;


}
