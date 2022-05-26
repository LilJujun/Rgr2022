package com.example.rgr.web.controller;

import com.example.rgr.model.LoginRequest;
import com.example.rgr.repo.UserRepository;
import com.example.rgr.service.UserService;
import com.example.rgr.spring.JwtResponse;
import com.example.rgr.spring.JwtUtils;
import com.example.rgr.spring.UserDetailsImpl;
import com.example.rgr.web.form.UserForm;
import com.example.rgr.web.form.UserFormValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RequestMapping("/auth")
public class UserController {
    @Autowired
    UserService userService;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private UserFormValidator validator;

    @Autowired
    JwtUtils jwtUtils;

    @InitBinder
    private void initBinder(WebDataBinder binder){
        binder.addValidators(validator);
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();


        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername()
        ));
    }


    @PostMapping("/registration")
    public ResponseEntity<?> userRegistrationSubmit(@Valid @RequestBody UserForm userForm){
//        UserForm userForm= new UserForm(name,password,email,birthDate);
        return ResponseEntity.ok(userService.save(userForm).getId());
    }



}
