package com.example.rgr.web.form;

import com.example.rgr.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;


@Component
public class UserFormValidator implements Validator{
    @Autowired
    private UserService userService;

    @Override
    public boolean supports(Class<?> cl){return UserForm.class.equals(cl);}

    @Override
    public void validate(Object target, Errors errors){ //checking existing emaill before registrstion
        UserForm form = (UserForm) target;
        String email = form.getEmail();
        if (userService.isUserEmailExist(email)){
            errors.rejectValue("email", "", "User already exists");
        }
    }
}
