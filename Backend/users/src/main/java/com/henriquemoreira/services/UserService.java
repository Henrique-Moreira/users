package com.henriquemoreira.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.henriquemoreira.entities.User;
import com.henriquemoreira.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;
	
	public List<User> allUsers() {
		return repository.findAll();
	}
	
	public User newUser(User entity) {
		return repository.save(entity);
	}
	
	public User findUserByUsername(String userName) {
		return repository.findByUsername(userName);
	}

}
