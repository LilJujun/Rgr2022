package com.example.rgr.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
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
    @Column( name = "messageID", nullable = false)

    private String messageID;
    private String userID;
    private String recipientID;
    private Date date;
    private String content;
    private String attachedFiles;


}
