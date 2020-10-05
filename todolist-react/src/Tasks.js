import React from 'react';

function Tasks(props) {
  const { task } = props;
  const taskList = task.map(item => {
    const { name, id } = item
    return (
      <p key={id}>{name} task id :{id}</p>
    )
  })
  return (
    <div>{taskList}</div>
  )
}

export default Tasks;