import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [],
            username: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.username) {
            axios.get(`http://localhost:8080/users/${this.state.username}`).then(res => {
                this.setState({ persons: [res.data] });
            });
        } else {
            this.getAllUsers();
        }

    }

    getAllUsers() {
        axios.get('http://localhost:8080/users').then(res => {
            this.setState({ persons: res.data });
        });
    }

    componentDidMount() {
        this.getAllUsers();
    }

    render() {
        return (
            <main className="main container">
                <h3 className="text-center text-info">Listagem de usuários</h3>
                <div>
                    <form id="login-form" className="form" onSubmit={this.handleSubmit}>
                        <div className="form-group search-row">
                            <input type="text" name="username" id="username" className="form-control" placeholder="Usuário" onChange={this.handleChange} />
                            <button type="submit" className="btn btn-primary">Pesquisar</button>
                        </div>
                    </form>
                </div>
                <div>
                    <table className="table table-bordered table-space">
                        <thead>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">Idade</th>
                                <th scope="col">Usuário</th>
                                <th scope="col">E-mail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.persons.map((person) => {
                                return (
                                    <tr key={person.id}>
                                        <td>{person.name}</td>
                                        <td>{person.age}</td>
                                        <td>{person.username}</td>
                                        <td>{person.email}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </main>
        );
    }
}

export default Users;