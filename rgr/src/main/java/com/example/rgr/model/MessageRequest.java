package com.example.rgr.model;

import com.example.rgr.entity.Message;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;
import java.util.List;



@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MessageRequest {


        private Long id;
        private String text;
        private Long chat_id;
        private Long user_id;
        private String username;
        private String path="";
        private Date date;

    public MessageRequest(Long id, String text, Long chat_id, Long user_id, String path, Date date) {
        this.id = id;
        this.text = text;
        this.chat_id = chat_id;
        this.user_id = user_id;
        this.path = path;
        this.date = date;
    }

    public MessageRequest(Long id, String text, Long chat_id, Long user_id, Date date) {
        this.id = id;
        this.text = text;
        this.chat_id = chat_id;
        this.user_id = user_id;
        this.date = date;
    }

    public static MessageRequest build(Message message){
            if(message.getAttachedFile()!=null){
                return new MessageRequest(message.getId(), message.getContent(),message.getChat().getId(),message.getUser().getId(), message.getAttachedFile().getPath(), message.getDate());
            }
            return new MessageRequest(message.getId(), message.getContent(),message.getChat().getId(),message.getUser().getId(), message.getDate());
        }


        public static List<MessageRequest> buildList(List<Message> messages){
            return messages.stream().map(MessageRequest::build).toList();
        }

    }


