package com.example.rgr.web.controller;

import com.example.rgr.service.UserService;
import com.example.rgr.web.form.UserForm;
import com.example.rgr.web.form.UserFormValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Controller
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
    public String userRegistrationSubmit(@ModelAttribute @Valid UserForm userForm, BindingResult result){
        if (result.hasErrors()){
            return"/user/registration";
        } else {
            System.out.println("Saved");
        }
        return "redirect:/";
    }
}
