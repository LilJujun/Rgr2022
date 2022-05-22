package com.example.rgr.entity;

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
    private String messageID;
    private String recipientID;
    private Date date;
    private String content;
    private String attachedFiles;

    @ManyToOne
    @JoinColumn(name = "recipientID")
    private Chat recipient;

    @ManyToOne
    @JoinColumn(name = "userID")
    private User user;


}
