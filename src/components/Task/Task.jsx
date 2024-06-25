import React from "react";
import "./Task.css";

function Task({ id, text, removeTask }) {
  return (
    <div className="task__block">
      <input type="checkbox" />
      <p className="task__text">{text}</p>
      <button onClick={() => removeTask(id)}>Delete</button>
    </div>
  );
}

export default Task;
