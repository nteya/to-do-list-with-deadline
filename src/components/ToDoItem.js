// src/components/ToDoItem.js

import React from 'react';

const ToDoItem = ({ task, removeTask }) => {
  return (
    <div className="task-item">
      <span>{task.name}</span>
      <span>{task.deadline}</span>
      <button onClick={() => removeTask(task)}>Remove</button>
    </div>
  );
};

export default ToDoItem;

