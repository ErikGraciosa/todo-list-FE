import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import Header from './Header.js';
import './App.css';
import HomePage from './HomePage.js';
import ToDoList from './ToDoList.js';
import AuthPage from './AuthPage.js';


export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
                    <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />} 
                    />
                    <Route 
                            path="/ToDoList" 
                            exact
                            render={(routerProps) => <ToDoList {...routerProps} />} 
                    />      
                    <Route 
                            path="/AuthPage" 
                            exact
                            render={(routerProps) => <AuthPage {...routerProps} />} 
                    />                    
                    </Switch>
                </Router>
            </div>
        )
    }
}