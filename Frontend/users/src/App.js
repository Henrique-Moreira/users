import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/Register';
import Users from './components/Users';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                <Route exact path="/"><Users /></Route>
                <Route path="/register"><Register /></Route>
                </Switch>
                <Footer />
            </Router>
        );
    }
}

export default App;