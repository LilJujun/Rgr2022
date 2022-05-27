package com.example.rgr.model;


import com.example.rgr.entity.Message;
import com.example.rgr.service.UserService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MessageDto { //to display messages in chat

    @Autowired
    private static UserService userService;
    private Long id;
    private String text;
    private Long chat_id;
    private Long user_id;
    private String path;
    private Date date;


    public static MessageDto build(Message message){
        return new MessageDto(message.getId(), message.getContent(),message.getChat().getId(),message.getUser().getId(), message.getAttachedFile().getPath(), message.getDate());
    }

    public static Message toMessage(MessageDto messageDto){
        Message message= new Message();
        message.setContent(messageDto.getText());
        message.setUser(userService.findById(messageDto.getUser_id()));
        return message;
    }

    public static List<MessageDto> buildList(List<Message> messages){
        return messages.stream().map(MessageDto::build).toList();
    }

}
