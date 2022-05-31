package com.example.rgr.service;

import com.example.rgr.entity.Chat;
import com.example.rgr.entity.User;
import com.example.rgr.exception.UserExistsException;
import com.example.rgr.repo.UserRepository;
import com.example.rgr.web.form.ChatForm;
import com.example.rgr.web.form.UserForm;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import javax.validation.Valid;
import java.util.*;

import org.springframework.security.crypto.password.PasswordEncoder;

@AllArgsConstructor
@NoArgsConstructor
@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    @Lazy
    private PasswordEncoder passwordEncoder;


    public List<User> getList() {
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }

    public boolean isUserEmailExist(String email){return userRepository.countByEmail(email) != 0;}

    public String addFriend(Long id, String frName){
        if(userRepository.findByNickname(frName).isEmpty())
            return "Нет такого пользователя";
        User user = userRepository.findById(id).get();
        User friend = userRepository.findByNickname(frName).get();
        for(User usr: user.getFriends()){
            if(Objects.equals(usr.getId(), friend.getId())){
                return "Пользователь уже у вас в друзьях";
            }
        }

        friend.getFriends().add(user);
        userRepository.save(friend);

        return "Добавлен в друзья";


    }

    public Set<User> findFriends(Long id){
        User user = userRepository.findById(id).get();
        return user.getFriends();


    }

    public Optional<User>  findByEmail(String email){
        return userRepository.findByEmail(email);
    }

    public Optional<User> findByNickname(String nickname){
        return userRepository.findByNickname(nickname);
    }

    public User findById(Long ID){return userRepository.findById(ID).get();}

    public User update(@Valid UserForm form){ //changing password
        User u = userRepository.findByEmail(form.getEmail()).orElseThrow();
        BeanUtils.copyProperties(form, u,"password");
        u.setPassword(passwordEncoder.encode(form.getPassword()));
        return userRepository.save(u);
    }

    public User save(@Valid UserForm form) { //changing chat params
        if (isUserEmailExist(form.getEmail())){
            throw new UserExistsException("User with email" + form.getEmail() + "already exists");
        }
        User u = new User();
        BeanUtils.copyProperties(form, u);
        u.setPassword(passwordEncoder.encode(form.getPassword()));
        return userRepository.save(u);
    }

    public void addUserInChat(Chat chat, Long id){
        User user = userRepository.findById(id).get();
        user.getChats().add(chat);
        userRepository.save(user);
    }

}
