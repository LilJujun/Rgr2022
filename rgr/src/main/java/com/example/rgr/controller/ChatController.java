package com.example.rgr.controller;

import com.example.rgr.entity.Message;
import com.example.rgr.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class ChatController {

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @Autowired
    private MessageService messageService;

    @MessageMapping("/chat")
    public void processMessage(@Payload Message message){
        Message saved = messageService.save(message);
        simpMessagingTemplate.convertAndSend(message.getRecipientID(),"/message");
    }
    @GetMapping("/{chatID}")
    public ResponseEntity<?> findChatMessages (@PathVariable String chatID){
        return ResponseEntity.ok(messageService.findChatMessages(chatID));
    }

}
