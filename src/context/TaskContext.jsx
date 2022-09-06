import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    const newTask = {
      id: tasks.length,
      title: task.title,
      description: task.description,
    };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(taskID) {
    const nat = tasks.filter((n) => n.id !== taskID);
    setTasks(nat);
  }

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        createTask: createTask,
        deleteTask: deleteTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
