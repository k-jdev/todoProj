import React, { useEffect } from "react";
import "./App.css";
import Task from "./components/Task/Task";

function App() {
  const [text, setText] = React.useState("");
  const [tasks, setTasks] = React.useState([]);
  const [hiddenText, setHidenText] = React.useState(false);

  // Збреження задач в localStorage при змнінені
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Загрузка задач из localStorage при монтировании компонента
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Видалення задачі
  function removeTask(id) {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  }

  // Переключення задачі
  function toggleTaskCompletion(id) {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  // Створення нової заадчі
  function createTask() {
    if (text.trim()) {
      const newTask = { id: Date.now(), text: text, completed: false };
      setTasks((prevState) => [...prevState, newTask]);
      setText("");
    }
  }

  function hideText() {
    setHidenText((prevState) => !prevState);
  }

  return (
    <>
      <div className="todo">
        <h1 className="todo__main-text">
          To<span className="todo__main-text__span">Do</span>
        </h1>
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
        {!hiddenText && (
          <>
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
          </>
        )}
      </div>
      <div className="todo__all-tasks">
        <div className="todo__active-tasks">
          <h2 onClick={hideText} className="active-tasks__text">
            Active Tasks
          </h2>
          {!hiddenText && (
            <>
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
            </>
          )}
        </div>
        <div className="todo__complete-tasks">
          <h2 onClick={hideText} className="complete-task__text">
            Complete tasks
          </h2>
          {!hiddenText && (
            <>
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
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
