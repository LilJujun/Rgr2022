package com.example.rgr.web.controller;

import com.example.rgr.entity.User;
import com.example.rgr.mail.MailClient;
import com.example.rgr.model.LoginRequest;
import com.example.rgr.model.UserModel;
import com.example.rgr.service.UserService;
import com.example.rgr.spring.JwtResponse;
import com.example.rgr.spring.JwtUtils;
import com.example.rgr.spring.UserDetailsImpl;
import com.example.rgr.web.form.UserForm;
//import com.example.rgr.web.form.UserFormValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import java.util.UUID;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RequestMapping("/auth")
public class UserController {
    @Autowired
    UserService userService;

    @Autowired
    MailClient mailClient;

    @Autowired
    AuthenticationManager authenticationManager;


    @Autowired
    JwtUtils jwtUtils;



    private static UserForm userFormSt;
    private static String confirmCodeSt;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();


        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail()
        ));
    }


    @PostMapping("/registration")
    public ResponseEntity<?> userRegistrationSubmit(@Valid @RequestBody UserForm userForm){
        confirmCodeSt = UUID.randomUUID().toString();
        userFormSt=userForm;
      mailClient.sendMail( userForm.getEmail(),"Email confirm", confirmCodeSt);
      return ResponseEntity.ok("true");
    }


    @PostMapping("/accept")
    public ResponseEntity<?> userRegistrationAccept(){

            return ResponseEntity.ok(UserModel.toModel(userService.save(userFormSt)));


    }

    @GetMapping("/accept")
    public ResponseEntity<?> userRegistrationGetCode(){

        return ResponseEntity.ok(confirmCodeSt);

    }










}
