package com.henriquemoreira.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.henriquemoreira.entities.User;

public interface UserRepository extends JpaRepository<User, Long>  {

	User findByUsername(String userName);
}
