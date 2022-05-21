package com.example.rgr.service;

import com.example.rgr.model.Message;
import com.example.rgr.repo.ChatRepository;
import com.example.rgr.repo.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MessageService {
    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private ChatService chatService;

    public Message save(Message message){
        messageRepository.save(message);
        return message;
    }

    public List<Message> findChatMessages(String chatID){
        var chatID1=chatService.getChatID(chatID);
        var messages=chatID1.map(cID -> messageRepository.findAllByChatId(cID)).orElse(new ArrayList<>());
        return messages;
    }
}
