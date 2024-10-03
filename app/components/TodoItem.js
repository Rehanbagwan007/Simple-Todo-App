"use client"
import React from "react";
const TodoItem = ({ task, index, deleteTask }) => {
  return (
    <div className="All-Data">
      <h4>{task.title}</h4>
      <h4>{task.disc}</h4>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </div>
  );
};

export default TodoItem;
