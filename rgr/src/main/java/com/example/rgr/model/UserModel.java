package com.example.rgr.model;

import com.example.rgr.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserModel {
    private Long id;
    private String nickname;

    public static UserModel toModel(User user){
        UserModel userModel = new UserModel(user.getId(), user.getNickname());

        return userModel;
    }
}
