import React from 'react';

function Tasks(props) {
  const { task, deleteData } = props;

  const taskList = task.map(item => {
    const { name, id } = item
    return (
      <div key={id} className="task-container">
        <p className="task" >{name}</p>
        <button onClick={() => deleteData(id)}>Delete Task</button>
      </div>
    )
  })
  return (
    <div>{taskList}</div>
  )
}

export default Tasks;