package com.example.rgr.service;

import com.example.rgr.model.User;
import com.example.rgr.repo.UserRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@AllArgsConstructor
@NoArgsConstructor
@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    UserRepository userService;

    /*@Autowired
    @Lazy
    private PasswordEncoder passwordEncoder;*/


    public List<User> getList() {
        List<User> users = new ArrayList<>();
        userService.findAll().forEach(users::add);
        return users;
    }
}
