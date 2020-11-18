import React, { Component } from 'react'
import fetch from 'superagent';

export default class AuthPage extends Component {

    state = {
        email: '',
        password: ''
    }

    handleLogInSubmit = async (e) => {
        e.preventDefault();

        const logIn = await fetch.post('https://shielded-chamber-86620.herokuapp.com/auth/signin')
        .send(this.state);

        this.props.updateToken(logIn.body.token)

        this.props.history.push('/ToDoList');
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <h2>This is the Log In Page</h2>
                <form onSubmit={this.handleLogInSubmit}>
                    <label onChange={(e) => this.setState({ email: e.target.value})}>Enter Email
                        <input></input>
                    </label>
                    <label onChange={(e) => this.setState({ password: e.target.value})}>Enter Password
                        <input></input>
                    </label>
                    <button>Sign In</button>
                </form>
            </div>
        )
    }
}
