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
import SignUp from './SignUp.js'
import AuthPage from './AuthPage.js';
import PrivateRoute from './PrivateRoute.js';



export default class App extends Component {

    state = {
        token: localStorage.getItem('TOKEN') || '',
    }

    //This is a function that sets the token into state form the SignUp Page
    updateToken = (token) => {
        localStorage.setItem('TOKEN', token);

        this.setState({
            token: token,
        })
    }

    logOut = () => {
        //clear local storage
        localStorage.setItem('TOKEN', '');
        localStorage.setItem('USERNAME', '');

        this.setState({
            token: ''
        })
    }

    

    render() {
        return (
            <div>
                <Router>
                    {
                        <div>
                            <button onClick={this.logOut}>SignOut</button>
                        </div>
                    }
                    <Header />
                    <Switch>
                    <Route 
                        path="/" 
                        exact
                        render={(routerProps) => <HomePage {...routerProps} />} 
                    />
                    <PrivateRoute 
                        exact 
                        path='/ToDoList' 
                        token={this.state.token} 
                        render={(routerProps) => <ToDoList 
                        {...routerProps} />} />
                    <Route 
                        path="/SignUp" 
                        exact
                        render={(routerProps) => <SignUp {...routerProps} updateToken={this.updateToken} />} 
                    />   
                    <Route 
                        path="/AuthPage" 
                        exact
                        render={(routerProps) => <AuthPage {...routerProps} updateToken={this.updateToken} />} 
                    />                    
                    </Switch>
                </Router>
            </div>
        )
    }
}