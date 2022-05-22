package com.example.rgr.repo;

import com.example.rgr.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    @Override
    Optional<User> findById(Long ID);

    Optional<User> findByEmail(String email);

}
