import React from "react";
import { useState } from "react";

const ToDoPage = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  //   tasks.map((item, key) => {
  //     const { text, completed } = item;
  //     console.log(text, "ITEM//", key);
  //   });
  //   console.log(tasks, "task list");
  const handleAddTask = () => {
    if (task !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };

  return (
    <div className="ToDoPage">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={task}
        onChange={(event) => setTask(event.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add</button>
      <ul>
        {tasks.map((t, index) => {
          const { text, completed } = t;
          return (
            <li
              key={index}
              style={{ textDecoration: completed ? "line-through" : "none" }}
            >
              <span>{index + 1}</span>
              <span onClick={() => toggleTaskCompletion(index)}>{text}</span>
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoPage;
