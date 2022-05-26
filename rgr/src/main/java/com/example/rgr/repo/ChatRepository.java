package com.example.rgr.repo;

import com.example.rgr.entity.Chat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ChatRepository extends JpaRepository<Chat, Long> {

//    @Query(value = "select * from chat ch inner join user_chat as uc on uc.chat-id = ch.id where uc.user_id = :user_id;", nativeQuery = true)
//    Optional<List<Chat>> findWhereUserId(@Param("usr_id") Long id);

    @Override
    Optional<Chat> findById(Long recipientID);

    @Override
    void deleteById (Long id);



}