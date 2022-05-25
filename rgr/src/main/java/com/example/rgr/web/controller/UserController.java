package com.example.rgr.web.controller;

import com.example.rgr.repo.UserRepository;
import com.example.rgr.service.UserService;
import com.example.rgr.web.form.UserForm;
import com.example.rgr.web.form.UserFormValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class UserController {
    @Autowired
    UserService userService;

    @Autowired
    private UserFormValidator validator;

    @InitBinder
    private void initBinder(WebDataBinder binder){
        binder.addValidators(validator);
    }

    @GetMapping("/user/registration")
    public String userRegistration(Model model){

        model.addAttribute(new UserForm());
        return "user/registration";
    }

    @PostMapping("/user/registration")
    public ResponseEntity<?> userRegistrationSubmit(@Valid @RequestBody UserForm userForm){
//        UserForm userForm= new UserForm(name,password,email,birthDate);
        return ResponseEntity.ok(userService.save(userForm).getId());
    }


    @GetMapping("/user/{nickname}")
    public ResponseEntity<?> findUserByNickName (@PathVariable String nickname){
        return ResponseEntity.ok(userService.findByNickname(nickname));
    }



}
