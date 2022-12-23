import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTask, doneTask } from '../../Js/Action/ListTask'
import Edit from '../Edit/Edit'
import './Task.css'
const Task = ({ task }) => {
  const dispatch = useDispatch()
  return (
    <div className='task-container'>
      <p className={task.isDone ? "done":null}>{task.Text}</p>
      <Edit task={task}/>
      <Button onClick={() => dispatch(deleteTask(task.id))} >Delete</Button>
      <Button onClick={() => dispatch(doneTask(task.id))}>{task.isDone ? "undone" : "done"}</Button>
    </div>
  )
}

export default Task
