package com.example.rgr.repo;

import com.example.rgr.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface UserRepository extends JpaRepository<User,Long> {
    List <User> findByUserID(Long ID);
}
