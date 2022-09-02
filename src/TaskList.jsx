import React from "react";
import { useState, useEffect } from "react";
import { tasks as data } from "./tasks";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  if (tasks.length === 0) {
    return <h1>Arreglo tasks sin elementos</h1>;
  }

  return (
    <div>
      {tasks.map((t) => (
        <div key={t.id}>
          <h1>{t.title}</h1>
          <p>{t.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
