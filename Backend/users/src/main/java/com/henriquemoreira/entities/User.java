package com.henriquemoreira.entities;


import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
@Entity
@Table(name="user")
public class User implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank(message = "ERRO: Preencha o campo usuário.")
	private String username;
	
	@NotBlank(message = "ERRO: Preencha o campo nome.")
	private String name;
	
	@NotNull(message = "ERRO: O campo idade não pode ser nulo.")
	private Long age;
	
	@Email(message = "ERRO: Insira um email válido.")
	private String email;
	
	@NotBlank(message = "ERRO: Preencha o campo senha.")
	private String password;
	
}
