import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            name: '',
            age: 0,
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            username: this.state.username,
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:8080/users', user)
        .then( () => {
            window.open("/","_self");
        });
    }

    render() {
        return (
            <main className="container">
                <section className="main">
                    <form id="login-form" className="form" onSubmit={this.handleSubmit}>
                        <h3 className="text-center text-info">Cadastro de usuários</h3>
                        <div className="form-group">
                            <label for="username" className="text-info">Usuário:</label>
                            <input type="text" name="username" id="username" className="form-control" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="name" className="text-info">Nome:</label>
                            <input type="text" name="name" id="name" className="form-control" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="age" className="text-info">Idade:</label>
                            <input type="number" name="age" id="age" className="form-control" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="email" className="text-info">E-mail:</label>
                            <input type="text" name="email" id="email" className="form-control" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="password" className="text-info">Senha:</label>
                            <input type="password" name="password" id="password" className="form-control" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Cadastrar</button>  
                        </div>
                    </form>
                </section>
            </main>
        );
    }
}

export default Register;