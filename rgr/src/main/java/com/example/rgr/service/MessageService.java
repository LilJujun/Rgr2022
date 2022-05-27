package com.example.rgr.service;

import com.example.rgr.entity.AttachedFile;
import com.example.rgr.entity.Chat;
import com.example.rgr.entity.Message;
import com.example.rgr.model.MessageDto;
import com.example.rgr.model.MessageStatus;
import com.example.rgr.repo.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class MessageService {
    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private ChatService chatService;

    public Message save(Message message){
        message.setStatus(MessageStatus.RECEIVED);
        messageRepository.save(message);
        return message;
    }

    public Message save(MessageDto messageDto, Long chat_id){
        Date date = new Date();

        Message message=MessageDto.toMessage(messageDto);
        message.setUser(userService.findById(messageDto.getUser_id()));
        Chat chat = chatService.findById(chat_id).orElseThrow();
        message.setChat(chat);
        message.setDate(date);
        AttachedFile attachedFile = new AttachedFile();
        attachedFile.setPath(messageDto.getPath());
        attachedFile.setChat(chat);
        message.setAttachedFile(attachedFile);
        return messageRepository.save(message);


    }

    public List<Message> findAllByChatId(Long chatID){
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
