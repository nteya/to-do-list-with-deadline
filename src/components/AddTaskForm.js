// src/components/AddTaskForm.js

import React, { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName && deadline) {
      const newTask = {
        id: Date.now(),
        name: taskName,
        deadline: new Date(deadline).toISOString(), // Use ISO string for easy comparison
      };
      addTask(newTask);
      setTaskName('');
      setDeadline('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task"
        required
      />
      <input
        type="datetime-local"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;


