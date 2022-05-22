package com.example.rgr.web.controller;

import com.example.rgr.entity.Message;
import com.example.rgr.model.MessageDto;
import com.example.rgr.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
public class ChatController {

    @Autowired
    private MessageService messageService;

    @PostMapping("/chat")
    public ResponseEntity<?> processMessage(@RequestBody Message message){
        Message saved = messageService.save(message);

        return ResponseEntity.ok().build();
    }
    @GetMapping("/messages/{chatID}")
    public ResponseEntity<?> findChatMessages (@PathVariable String chatID){
        return ResponseEntity.ok(messageService.findChatMessages(chatID));
    }

}
