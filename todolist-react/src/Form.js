import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: null
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTask(this.state)
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (
      <div className="form-container" >
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="name" onChange={this.handleChange}></input>
          <button>Add Task</button>
        </form>
      </div>
    );
  }
}

export default Form;