package com.example.rgr.web.form;

import com.example.rgr.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ChatForm {
    private String id;


    private String name;

    private  String description;


    private String type;


    private Long isAdmin;

    private Set<User> users=new HashSet<>();

     /////make im service!!!!!!!1
    private MultipartFile[] chatPhoto;

    public void addUser(User user){
        users.add(user);
    }
}
