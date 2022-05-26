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
import org.springframework.stereotype.Service;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import org.springframework.security.crypto.password.PasswordEncoder;
import java.util.Optional;

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

    public Optional<User>  findByEmail(String email){
        return userRepository.findByEmail(email);
    }

    public Optional<User> findByNickname(String nickname){
        return userRepository.findByNickname(nickname);
    }

    public User findById(Long ID){return userRepository.findById(ID).get();}

    public User update(@Valid UserForm form){ //changing password
        User u = new User();
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


}
