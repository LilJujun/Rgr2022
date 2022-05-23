package com.example.rgr.service;

import com.example.rgr.entity.Chat;
import com.example.rgr.entity.User;
import com.example.rgr.repo.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class ChatService {

    @Autowired private ChatRepository chatRepository;


    public Optional<String> getChatID(String chatID){
        return chatRepository.findById(chatID).map(Chat::getId);
    }

    public Optional<Chat> findById(String chatID){return chatRepository.findById(chatID);}

    public List<Chat> findAll(){ return  chatRepository.findAll();}

    public List<Chat> findByUserId(Long id){

        List<Chat> chats = chatRepository.findAll();
        List<Chat> userchats = new ArrayList<Chat>();
        for(Chat chat : chats){
            List<User> users=chat.getUsers();
            boolean flag=false;
            for(User user: users){
                if (Objects.equals(user.getId(), id)) {
                    flag = true;
                    break;
                }
            }
            if(flag) userchats.add(chat);

        }
        return userchats;

    }

}
