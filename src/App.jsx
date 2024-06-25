import React from "react";
import "./App.css";
import Task from "./components/Task/Task";

function App() {
  const [text, setText] = React.useState("");
  const [tasks, setTasks] = React.useState([]);

  // Функция удаления задачи
  function removeTask(id) {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  }

  // Функция создания новой задачи
  function createTask() {
    if (text.trim()) {
      const newTask = { id: Date.now(), text: text };
      setTasks((prevState) => [...prevState, newTask]);
      setText("");
    }
  }

  return (
    <div className="todo">
      <h1>ToDo</h1>
      <div className="todo__block">
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
        />
        <button className="todo__send-btn" onClick={createTask}>
          Send
        </button>
      </div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          text={task.text}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
}

export default App;
