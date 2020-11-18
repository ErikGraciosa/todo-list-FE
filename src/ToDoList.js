import React, { Component } from 'react'
import fetch from 'superagent';
import './ToDoList.css';

export default class ToDoList extends Component {
    state = {
        todoList: [],
        newEntry: '',
    }

    componentDidMount = async () => {
        await this.getRequest();
    }

    sendNewEntry = async (e) => {
        e.preventDefault();

        await fetch.post('https://shielded-chamber-86620.herokuapp.com/api/todos')
        .send({
            todo: this.state.newEntry,
            completed: false,
        })
        .set({
            Authorization: this.props.token,
        });
        await this.getRequest();
    }

    markCompleted = async (todoId) => {
        await fetch.put(`https://shielded-chamber-86620.herokuapp.com/api/todos/${todoId}`)
        .set({
            Authorization: this.props.token,
        });
        await this.getRequest();        
    }

    getRequest = async () => {
        const newFetch = await fetch.get(`https://shielded-chamber-86620.herokuapp.com/api/todos`)
        .set({
            // Authorization: localStorage.getItem('TOKEN'),
            Authorization: this.props.token,
        })
        this.setState({
            todoList: newFetch.body,
        })
    }

    render() {
        console.log(this.state);
        return (
            <section className='todolist'>
                This is the to do list page.
                <div>
                    <form onSubmit={this.sendNewEntry}>
                        <label>New Task Description
                            <input onChange={(e) => this.setState({newEntry: e.target.value})}></input>
                            <button>Add new task</button>
                        </label>
                    </form>
                </div>
                <div className='tasklist'>
                    {
                        this.state.todoList.map((task, index) => 
                            <div className='singletask'>{index + 1})
                                <div>{task.todo}</div>
                                <div> Done? {task.completed ? 'Yes' : 'No'}</div>
                                <button className='completed' onClick={() => this.markCompleted(task.id)}>Mark Completed</button>
                            </div>
                        )
                    }
                </div>
            </section>
        )
    }
}
