package com.example.back_end.repository;

import java.util.Optional;

import com.example.back_end.model.ERole;
import com.example.back_end.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}