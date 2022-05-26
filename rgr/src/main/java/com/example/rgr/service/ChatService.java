package com.example.rgr.service;

import com.example.rgr.entity.Chat;
import com.example.rgr.entity.User;
import com.example.rgr.repo.ChatRepository;
import com.example.rgr.web.form.ChatForm;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class ChatService {

    @Autowired private ChatRepository chatRepository;


    public Optional<Long> getChatID(Long chatID){
        return chatRepository.findById(chatID).map(Chat::getId);
    }

    public Optional<Chat> findById(Long chatID){return chatRepository.findById(chatID);}

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
    public void deleteById(Long id){
        chatRepository.deleteById(id);
    }

    public Chat update(@Valid ChatForm form) { //changing chat params
        Chat ch = new Chat();
        BeanUtils.copyProperties(form, ch);
        return chatRepository.save(ch);
    }
    public Chat save(@Valid ChatForm form) { //changing chat params
        Chat ch = new Chat();
        BeanUtils.copyProperties(form, ch);
        return chatRepository.save(ch);
    }

}
