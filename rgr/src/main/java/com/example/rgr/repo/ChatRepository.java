package com.example.rgr.repo;

import com.example.rgr.entity.Chat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ChatRepository extends JpaRepository<Chat, Long> {


    Optional<Chat> findById(String recipientID);

}