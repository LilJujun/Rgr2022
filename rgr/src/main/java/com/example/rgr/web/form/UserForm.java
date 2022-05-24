package com.example.rgr.web.form;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserForm { //for reg/auth
    private Long ID;

    @Email(message = "Email is not correct")
    private String email;

    @NotBlank
    @Size(min = 3)
    private String name;

    @NotBlank
    private Date birthDate;

    @NotBlank
    @Size(min = 3)
    private String password;
}
