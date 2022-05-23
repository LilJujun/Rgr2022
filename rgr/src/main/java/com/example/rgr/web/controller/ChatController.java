package com.example.rgr.web.controller;

import com.example.rgr.entity.Chat;
import com.example.rgr.entity.Message;
import com.example.rgr.model.ChatDto;
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
    public ResponseEntity<?> processMessage(@RequestBody Message message, @PathVariable String chat_id ){
        MessageDto messageDto = new MessageDto();
        if( chatService.findById(chat_id).isPresent()){
            message.setChat(chatService.findById(chat_id).orElse(new Chat()));
            Message saved = messageService.save(message);
            messageDto = MessageDto.build(saved);
            //        return ResponseEntity.ok().build(messageDto);
            return ResponseEntity.ok(messageDto);
        }else{
            System.err.println("Chat not found with this id");
            return ResponseEntity.notFound().build();
        }



    }


    @GetMapping("/chat/{chat_id}")
    public ResponseEntity<?> findChatMessages (@PathVariable String chat_id){
        return ResponseEntity.ok(MessageDto.buildList(messageService.findAllByChatId(chat_id)));
    }
    @GetMapping("/chat/{chat_id}/info")
    public ResponseEntity<?> findChatUsers(@PathVariable String chat_id){

        return ResponseEntity.ok(chatService.findById(chat_id).orElse(new Chat()).getUsers());
    }
    @PutMapping("/chat/{chat_id}/info")
    public ResponseEntity<?> updateChat (@RequestParam Long id){

    }

    @GetMapping("/chat")
    public ResponseEntity<?> findChats (@RequestParam Long id){
        List<Chat> chats = chatService.findByUserId(id);
        List<ChatDto> chatDtos = ChatDto.buildList(chats);
        return ResponseEntity.ok(chatDtos);
    }

}
