import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                    <li><Link to="/" className="menu">Usuários</Link></li>
                    <li><Link to="/register" className="menu">Cadastro</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;