package com.example.rgr.service;

import com.example.rgr.entity.Message;
import com.example.rgr.model.MessageStatus;
import com.example.rgr.repo.MessageRepository;
import org.hibernate.Criteria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.management.Query;
import java.util.ArrayList;
import java.util.List;

@Service
public class MessageService {
    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private ChatService chatService;

    public Message save(Message message){
        message.setStatus(MessageStatus.RECEIVED);
        messageRepository.save(message);
        return message;
    }

    public List<Message> findChatMessages(String chatID){
        var chatID1=chatService.getChatID(chatID);
        var messages=chatID1.map(cID -> messageRepository.findAllByChat_id(cID)).orElse(new ArrayList<>());

        if(messages.size()>0){
            messages.forEach(message -> {
                message.setStatus(MessageStatus.DELIVERED);
                messageRepository.save(message);
            });
        }
        return messages;
    }


}
