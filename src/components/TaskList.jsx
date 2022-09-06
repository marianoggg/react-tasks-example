import {useContext}  from 'react'
import TaskCard from "./TaskCard";
import {TaskContext} from '../context/TaskContext'


function TaskList() {

  const { tasks} = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h1>Arreglo tasks sin elementos</h1>;
  }

  return (
    <div className='grid grid-cols-4 gap-2'>
      {/* {console.log(tasks)} */}
      {tasks.map((t) => (
        <>
          <TaskCard key={t.id} t={t}/>
        </>
      ))}
    </div>
  );
}

export default TaskList;
