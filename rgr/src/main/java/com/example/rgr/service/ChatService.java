package com.example.rgr.service;

import com.example.rgr.entity.Chat;
import com.example.rgr.entity.User;
import com.example.rgr.repo.ChatRepository;
import com.example.rgr.web.form.ChatForm;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.Valid;
import java.util.*;

@Service
public class ChatService {

    @Autowired private ChatRepository chatRepository;


    public Optional<Long> getChatID(Long chatID){
        return chatRepository.findById(chatID).map(Chat::getId);
    }

    public Optional<Chat> findById(Long chatID){return chatRepository.findById(chatID);}

    public Set<Chat> findAll(){ return  new HashSet<>(chatRepository.findAll());}

    public Set<Chat> findByUserId(Long id){

        Set<Chat> chats = new HashSet<>(chatRepository.findAll());
        Set<Chat> userchats = new HashSet<>();
        for(Chat chat : chats){
            Set<User> users=chat.getUsers();
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
    public void deleteById(Long id){
        chatRepository.deleteById(id);
    }

    public Chat findByName(String name){
        List<Chat> chats=chatRepository.findAll();
        for(Chat chat : chats){
            if(chat.getName()==name){
                return chat;
            }
        }


        return new Chat();
    }

    public Chat update(@Valid ChatForm form) { //changing chat params
        Chat ch = ChatForm.build(form);

        return chatRepository.save(ch);
    }
    public Chat save(@Valid ChatForm form) { //changing chat params
        Chat ch = ChatForm.build(form);

        return chatRepository.save(ch);
    }



}
