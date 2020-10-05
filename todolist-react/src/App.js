import React, { Component } from 'react';
import Tasks from './Tasks';
import './App.css';

class App extends Component {

  state = {
    tasks: [
      { name: "cleaning", id: 0 },
      { name: "cooking", id: 1 },
      { name: "motorbiking", id: 2 }
    ]
  }
  render() {
    return (
      <div className="App" >
        <h1>To Do List App</h1>
        <Tasks
          task={this.state.tasks} />
      </div>
    );
  }
}

export default App;
