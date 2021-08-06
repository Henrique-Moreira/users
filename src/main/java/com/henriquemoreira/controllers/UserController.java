package com.henriquemoreira.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.henriquemoreira.entities.User;
import com.henriquemoreira.services.UserService;

@Controller
@RequestMapping(value = "/users")
public class UserController {

	@Autowired
	private UserService service;
	
	@GetMapping
	public List<User> users() {
		return service.allUsers();
	}
	
	@PostMapping
	public User newProduct(@RequestBody User entity) {
		return service.newUser(entity);
	}
	
	@GetMapping("/{name}")
	public User findProductById(@PathVariable String name) {
		return service.findUserByName(name);
	}
}
