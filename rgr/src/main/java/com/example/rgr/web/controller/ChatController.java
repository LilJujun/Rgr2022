package com.example.rgr.web.controller;

import com.example.rgr.entity.Chat;
import com.example.rgr.entity.Message;
import com.example.rgr.model.MessageDto;
import com.example.rgr.repo.ChatRepository;
import com.example.rgr.service.ChatService;
import com.example.rgr.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ChatController {

    @Autowired
    private MessageService messageService;

    @Autowired
    private ChatService chatService;

    @PostMapping("/chat/{chat_id}")
    public ResponseEntity<?> processMessage(@RequestBody Message message, @RequestParam String chat_id ){

        if( chatService.findById(chat_id).isPresent()){
            Chat chat=chatService.findById(chat_id).orElse(new Chat());
            message.setChat(chat);
            Message saved = messageService.save(message);
            MessageDto messageDto = MessageDto.build(saved);
        }else{
            System.err.println("Chat not found");
        }


        return ResponseEntity.ok().build();
    }
    @GetMapping("/chat/{chat_id}")
    public ResponseEntity<?> findChatMessages (@PathVariable String chat_id){
        return ResponseEntity.ok(messageService.findAllByChatId(chat_id));
    }
    @GetMapping("/chat")
    public ResponseEntity<?> findChats (){
        List<Chat> chats = chatService.findAll();
        return ResponseEntity.ok(chats);
    }

}
