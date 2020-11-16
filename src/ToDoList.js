import React, { Component } from 'react'
import fetch from 'superagent';


export default class ToDoList extends Component {
    state = {
        todoList: [],
        KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjA1MTE4NjI3fQ.wMLgTDV__MQRsApAu8r_SbLN6He761IvwHpkonQzPIc',
        counter: 1,
    }

    componentDidMount = async () => {
        
        const newFetch = await fetch.get(`https://shielded-chamber-86620.herokuapp.com/api/todos`)
        .set({
            Authorization: this.state.KEY,
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
                {
                    this.state.todoList.map((task, index) => 
                        <div className='singletask'>{index + 1}.
                            <div>{task.todo}</div>
                            <div>{task.completed}</div>
                            <button>Mark Completed</button>
                        </div>
                    )
                }
            </section>
        )
    }
}
