import React, { Component } from 'react'

export default class AuthPage extends Component {
    render() {
        return (
            <div>
                <h2>This is the Log In Page</h2>
                <form>
                    <label>Enter Email
                        <input></input>
                    </label>
                    <label>Enter Password
                        <input></input>
                    </label>
                    <button>Sign In</button>
                </form>
            </div>
        )
    }
}
