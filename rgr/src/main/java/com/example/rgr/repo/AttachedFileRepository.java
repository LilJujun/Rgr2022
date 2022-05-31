package com.example.rgr.repo;

import com.example.rgr.entity.AttachedFile;
import com.example.rgr.entity.Chat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AttachedFileRepository extends JpaRepository<AttachedFile, Long> {

    @Override
    Optional<AttachedFile> findById(Long aLong);

    Optional<AttachedFile> findByPath(String path);
}
