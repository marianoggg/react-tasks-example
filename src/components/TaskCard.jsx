import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ t }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div class="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{t.title}</h1>
      <p className="text-gray-500 text-sm capitalize">{t.description}</p>
      <button
        className="bg-red-500 rounded-md text-sm px-2 py-2 mt-4 hover:bg-red-400"
        onClick={() => deleteTask(t.id)}
      >
        Eliminar Tarea
      </button>
    </div>
  );
}

export default TaskCard;
