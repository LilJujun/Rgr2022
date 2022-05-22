package com.example.rgr.repo;

import com.example.rgr.entity.Chat;
import com.example.rgr.entity.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends CrudRepository<User,Long> {
    @Override
    Optional<User> findById(Long ID);


    long countByEmail(String email);

    Optional<User> findByEmail(String email);

    Optional<User> findByNickname(String nickname);

}
