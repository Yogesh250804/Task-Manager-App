import React, { useState } from 'react';
import './App.css';
import TaskList from './TaskList';

function App() {
  // State to store the list of tasks
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  // Function to handle adding a new task
  const addTask = () => {
    if (taskInput.trim()) {
      const newTask = {
        id: Date.now(),
        text: taskInput,
        completed: false
      };
      setTasks([...tasks, newTask]);
      setTaskInput('');
    }
  };

  // Function to toggle the completion status of a task
  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="App">
      <header>
        <h1>Task Manager</h1>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </header>

      <TaskList
        tasks={tasks}
        onToggleCompletion={toggleTaskCompletion}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
