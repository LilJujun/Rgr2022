package com.example.rgr.web.form;
import com.example.rgr.entity.User;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserForm { //for reg/auth

    @NotBlank
    @Size(min = 3)
    private String nickname;


    @NotBlank
    @Size(min = 3)
    private String password;

    @NotBlank
//    @Email(message = "Email is not correct")
    private String email;


    @NotBlank
    private String birthDate;

    private String status;

    private MultipartFile multipartFile;



}
