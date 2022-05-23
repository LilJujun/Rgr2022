package com.example.rgr.service;

import com.example.rgr.repo.AttachedFileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AttachedFileService {
    @Autowired
    AttachedFileRepository attachedFileRepository;

    @Autowired
    ImageService imageService;



}
