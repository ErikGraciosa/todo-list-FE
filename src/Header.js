import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h2>This is a To Do List site.</h2>
                <NavLink to="/">Home</NavLink><br/>
                <NavLink to="/ToDoList">ToDoList</NavLink><br/>
                <NavLink to="/AuthPage">LogIn</NavLink><br/>
                <NavLink to="/SignUp">SignUp</NavLink><br/>
                <hr/>
            </div>
        )
    }
}
