import React from "react";
import "./Task.css";

function Task({ id, text, completed, removeTask, toggleTaskCompletion }) {
  return (
    <div className={`task ${completed ? "completed" : ""}`}>
      <span className="task-text">{text}</span>
      <div className="buttons">
        <button className="task-btn" onClick={() => toggleTaskCompletion(id)}>
          {completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => removeTask(id)}>Delete</button>
      </div>
    </div>
  );
}

export default Task;
