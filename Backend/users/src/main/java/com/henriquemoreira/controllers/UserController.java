package com.henriquemoreira.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.henriquemoreira.entities.User;
import com.henriquemoreira.services.UserService;

@RestController
@RequestMapping(value = "/users")
public class UserController {

	@Autowired
	private UserService service;
	
	@GetMapping
	public List<User> users() {
		return service.allUsers();
	}
	
	@PostMapping
	public ResponseEntity<String> newUser(@Valid @RequestBody User entity) throws Exception {
		service.newUser(entity);
		return ResponseEntity.ok("Usuário cadastrado com sucesso.");
	}
	
	@GetMapping("/{name}")
	public User findUserByUsername(@PathVariable String name) {
		return service.findUserByUsername(name);
	}
}
