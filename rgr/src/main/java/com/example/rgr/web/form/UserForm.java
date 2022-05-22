package com.example.rgr.web.form;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserForm {
    private Long ID;
    @Email(message = "Email is not correct")
    private String email;

    @NotBlank
    @Size(min = 3)
    private String name;

    @NotBlank
    @Size(min = 3)
    private String password;
}
