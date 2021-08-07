import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
    state = {
        persons: [],
    };

    componentDidMount() {
        axios.get('http://localhost:8080/users').then(res => {
            console.log(res);
            this.setState({ persons: res.data });
        });
    }

    render() {
        return (
            <main className="main">
                <div>
                    <ul>
                        {this.state.persons.map((person) => <li key={person.id}>{person.name}</li> )}
                    </ul>
                </div>
            </main>
        );
    }
}

export default Users;