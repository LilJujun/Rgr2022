package com.example.rgr.model;


import com.example.rgr.entity.Message;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MessageDto {
    String text;
    String chat_id;
    Long user_id;
    String path;


    public static MessageDto build(Message message){
        return new MessageDto(message.getContent(),message.getChat().getId(),message.getUser().getId(), message.getAttachedFile().getPath());
    }

}
