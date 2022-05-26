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
    private String email;
    private String birthDate;
    private String photo;
    private String status;

    public static UserModel toModel(User user){

        return new UserModel(user.getId(), user.getNickname(), user.getEmail(), user.getBirthDate(), user.getPhoto(), user.getStatus());
    }
}
