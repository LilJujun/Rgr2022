package com.example.rgr.service;

import com.example.rgr.entity.Chat;
import com.example.rgr.repo.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ChatService {

    @Autowired private ChatRepository chatRepository;


    Optional<String> getChatID(String chatID){
        return chatRepository.findById(chatID).map(Chat::getId);
    }
}
