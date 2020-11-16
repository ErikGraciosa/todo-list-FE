import React, { Component } from 'react'

export default class AuthPage extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>Enter Email
                        <input></input>
                    </label>
                    <label>Enter Password
                        <input></input>
                    </label>
                    <button>Submit Form</button>
                </form>
            </div>
        )
    }
}
