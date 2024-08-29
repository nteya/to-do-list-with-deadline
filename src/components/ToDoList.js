// src/components/ToDoList.js

import React, { useState, useEffect } from 'react';
import './ToDoList.css'; // Importing the CSS for ToDoList
import AddTaskForm from './AddTaskForm';
import ToDoItem from './ToDoItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Check if any tasks are due and notify
  useEffect(() => {
    const checkDueTasks = () => {
      const now = new Date();
      tasks.forEach(task => {
        const deadline = new Date(task.deadline);
        if (deadline <= now && !task.notified) {
          toast.info(`Task "${task.name}" is due!`);
          // Mark the task as notified to prevent repeated alerts
          task.notified = true;
        }
      });
      setTasks([...tasks]); // Trigger re-render to update tasks state
    };

    const checkInterval = setInterval(checkDueTasks, 1000); // Check every second

    return () => clearInterval(checkInterval);
  }, [tasks, currentTime]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, notified: false }]);
  };

  const removeTask = (taskToRemove) => {
    setTasks(tasks.filter((task) => task.id !== taskToRemove.id));
  };

  return (
    <div className="todo-list">
      <h1>My To-Do List</h1>
      <div className="clock">Current Time: {currentTime}</div>
      <AddTaskForm addTask={addTask} />
      <div className="task-list">
        {tasks.map((task) => (
          <ToDoItem key={task.id} task={task} removeTask={removeTask} />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ToDoList;



