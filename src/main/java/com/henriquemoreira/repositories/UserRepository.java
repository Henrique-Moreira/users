package com.henriquemoreira.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.henriquemoreira.entities.User;

public interface UserRepository extends JpaRepository<User, Long>  {

	List<User> findByNameContainingIgnoreCase(String name);
}
