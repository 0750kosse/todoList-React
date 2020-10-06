import React, { Component } from 'react';
import Tasks from './Tasks';
import Form from './Form';
import './App.css';

class App extends Component {

  state = {
    tasks: [
      { name: "cleaning", id: 0 },
      { name: "cooking", id: 1 },
      { name: "motorbiking", id: 2 }
    ]
  }

  addData = (data) => {
    data.id = Math.floor(Math.random() * 1000)
    const updatedTasks = [...this.state.tasks, data];
    this.setState({
      tasks: updatedTasks
    })
  }
  render() {
    return (
      <div className="App" >
        <h1>To Do List App</h1>
        <Form
          addTask={this.addData}
        />
        <Tasks
          task={this.state.tasks} />
      </div>
    );
  }
}

export default App;
