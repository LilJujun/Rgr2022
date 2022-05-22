package com.example.rgr.service;

import com.example.rgr.entity.User;
import com.example.rgr.repo.UserRepository;
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
    UserRepository userService;

    @Autowired
    @Lazy
    private PasswordEncoder passwordEncoder;


    public List<User> getList() {
        List<User> users = new ArrayList<>();
        userService.findAll().forEach(users::add);
        return users;
    }

    public boolean isUserEmailExist(String email){return userService.countByEmail(email) != 0 ? true : false;}
    public Optional<User>  findByEmail(String email){
        return userService.findByEmail(email);
    }

    public void update(@Valid UserForm form){
        User u = new User();
        BeanUtils.copyProperties(form, u,"password");
        u.setPassword(passwordEncoder.encode(form.getPassword()));
        userRepository.save(u);
    }
    public User findById(Long ID){return userRepository.findById(ID).get();}

}
