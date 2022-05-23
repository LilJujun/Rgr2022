package com.example.rgr.web.form;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ChatForm {
    private Long chatID;
    private String chatName;
    private MultipartFile[] file;


}
