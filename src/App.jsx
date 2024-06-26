import React from "react";
import "./App.css";
import Task from "./components/Task/Task";

function App() {
  const [text, setText] = React.useState("");
  const [tasks, setTasks] = React.useState([]);

  // delete task
  function removeTask(id) {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  }

  // toggle task completion
  function toggleTaskCompletion(id) {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  // create new task
  function createTask() {
    if (text.trim()) {
      const newTask = { id: Date.now(), text: text, completed: false };
      setTasks((prevState) => [...prevState, newTask]);
      setText("");
    }
  }

  return (
    <>
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
            completed={task.completed}
            removeTask={removeTask}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        ))}
      </div>
      <div className="todo__all-tasks">
        <div className="todo__active-tasks">
          <h2>Active tasks</h2>
          {tasks
            .filter((task) => !task.completed)
            .map((task) => (
              <Task
                key={task.id}
                id={task.id}
                text={task.text}
                completed={task.completed}
                removeTask={removeTask}
                toggleTaskCompletion={toggleTaskCompletion}
              />
            ))}
        </div>
        <div className="todo__complete-tasks">
          <h2>Complete tasks</h2>
          {tasks
            .filter((task) => task.completed)
            .map((task) => (
              <Task
                key={task.id}
                id={task.id}
                text={task.text}
                completed={task.completed}
                removeTask={removeTask}
                toggleTaskCompletion={toggleTaskCompletion}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
