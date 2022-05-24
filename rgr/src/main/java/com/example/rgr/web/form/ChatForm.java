package com.example.rgr.web.form;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ChatForm {
    private String ID;

    @NotBlank
    private String chatName;

    @NotBlank /////make im service!!!!!!!1
    private MultipartFile[] chatPhoto;
}
