package com.example.rgr.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name ="message")
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column( name = "messageID", nullable = false)

    private Long messageID;
    private int userID;
    private int recipientID;
    private LocalDateTime  date;
    private String content;
    private String attachedFiles;

    public Long getMessageID() {
        return messageID;
    }

    public void setMessageID(Long messageID) {
        this.messageID = messageID;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public int getRecipientID() {
        return recipientID;
    }

    public void setRecipientID(int recipientID) {
        this.recipientID = recipientID;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getAttachedFiles() {
        return attachedFiles;
    }

    public void setAttachedFiles(String attachedFiles) {
        this.attachedFiles = attachedFiles;
    }

    public Message() {
    }

    public Message(Long messageID, int userID, int recipientID, LocalDateTime date, String content, String attachedFiles) {
        this.messageID = messageID;
        this.userID = userID;
        this.recipientID = recipientID;
        this.date = date;
        this.content = content;
        this.attachedFiles = attachedFiles;
    }
}
