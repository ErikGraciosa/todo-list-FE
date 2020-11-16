import React, { Component } from 'react'
import fetch from 'superagent';

export default class SignUp extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const signUp = await fetch.post('https://shielded-chamber-86620.herokuapp.com/auth/signup')
            .send(this.state);
        
        // localStorage.setItem('TOKEN', signUp.body);
        this.props.updateToken(signUp.body.token);
        this.props.history.push('/ToDoList');
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <h2>This is the Sign up Page</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter Email
                        <input onChange={(e) => this.setState({email: e.target.value})} value={this.state.email}></input>
                    </label>
                    <label>Enter Password
                        <input onChange={(e) => this.setState({password: e.target.value})}value={this.state.password} type='password'></input>
                    </label>
                    <button >Sign Up!</button>
                </form>
            </div>
        )
    }
}
