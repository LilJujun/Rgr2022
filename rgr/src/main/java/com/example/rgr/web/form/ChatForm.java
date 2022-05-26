package com.example.rgr.web.form;

import com.example.rgr.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

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

    private List<User> users;

     /////make im service!!!!!!!1
    private MultipartFile[] chatPhoto;

    public void addUser(User user){
        List<User> userss = new ArrayList<>();
        userss.add(user);
        this.users=userss;
    }
}
