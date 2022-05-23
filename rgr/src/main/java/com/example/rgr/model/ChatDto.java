package com.example.rgr.model;

import com.example.rgr.entity.Chat;
import lombok.*;

import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class ChatDto {
    private String id;
    private String type;
    private String name;

    public static ChatDto build(Chat chat){
        return new ChatDto(chat.getId(), chat.getType(), chat.getName());
    }

    public static List<ChatDto> buildList(List<Chat> chats){

        return chats.stream().map(ChatDto::build).toList();
    }
}
