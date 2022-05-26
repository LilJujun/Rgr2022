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
    private String id;

    @NotBlank
    private String name;

    @NotBlank
    private  String description;

    @NotBlank
    private String type;

    @NotBlank
    private Long isAdmin;

    @NotBlank /////make im service!!!!!!!1
    private MultipartFile[] chatPhoto;
}
