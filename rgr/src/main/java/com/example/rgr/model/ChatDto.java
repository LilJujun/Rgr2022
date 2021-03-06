package com.example.rgr.model;

import com.example.rgr.entity.Chat;
import com.example.rgr.entity.User;
import lombok.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class ChatDto { //to display chats on main page
    private Long id;
    private String type;
    private String name;
    private Long isAdmin;
    private Set<User> users;
    private String description;
    private String photoPath;


    public static ChatDto build(Chat chat){
        return new ChatDto(chat.getId(), chat.getType(), chat.getName(), chat.getIsAdmin(), chat.getUsers(), chat.getDescription(), chat.getPhotoPath());
    }

    public static Set<ChatDto> buildList(Set<Chat> chats){

        return new HashSet<>(chats.stream().map(ChatDto::build).toList());
    }
}
