package com.example.rgr.service;

import com.example.rgr.entity.AttachedFile;
import com.example.rgr.repo.AttachedFileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.Optional;

@Service
public class AttachedFileService {
    @Autowired
    AttachedFileRepository attachedFileRepository;

    @Autowired
    ImageService imageService;

    public byte[] getImage(String path) throws IOException {
        Optional<AttachedFile> attachedFile = attachedFileRepository.findByPath(path);
        if(attachedFile.isPresent()) {
            try {
                File file = new File(String.format("src/main/resources/images/%s", path));
                try (InputStream stream = new FileInputStream(file)) {
                    return stream.readAllBytes();
                }
            } catch (IOException e){
                throw new IOException(e);
            }
        } else {
            throw new IOException("not found");
        }
    }
//     public AttachedFile saveImage(MultipartFile multipartFile){
//
//     }



}
