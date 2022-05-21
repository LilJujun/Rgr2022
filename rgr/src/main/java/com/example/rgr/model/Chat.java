package com.example.rgr.model;

import javax.persistence.*;

@Entity
public class Chat  {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "chatID", nullable = false)
    private Long chatID;

    @Column(name = "type", nullable = false)
    private String type;

    @Column(name = "attachedFilesID")
    private Long attachedFilesID;

    @Column(name = "isAdmin", nullable = false)
    private Long isAdmin;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Long getAttachedFilesID() {
        return attachedFilesID;
    }

    public void setAttachedFilesID(Long attachedFilesID) {
        this.attachedFilesID = attachedFilesID;
    }

    public Long getIsAdmin() {
        return isAdmin;
    }

    public void setIsAdmin(Long isAdmin) {
        this.isAdmin = isAdmin;
    }

    public Long getChatID() {
        return chatID;
    }

    public void setChatID(Long chatID) {
        this.chatID = chatID;
    }
}
