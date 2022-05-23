package com.example.rgr.model;


import com.example.rgr.entity.Message;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.*;

import static java.util.stream.Collectors.toList;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MessageDto {
    String text;
    String chat_id;
    Long user_id;
    String path;


    public static MessageDto build(Message message){
        return new MessageDto(message.getContent(),message.getChat().getId(),message.getUser().getId(), message.getAttachedFile().getPath());
    }

    public static List<MessageDto> buildList(List<Message> messages){
        return messages.stream().map(MessageDto::build).toList();
    }

}
