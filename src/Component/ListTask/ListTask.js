import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Task from '../Task/Task'
const ListTask = () => {
  const list = useSelector(state => state.ListReducer.ListTasks)
  return (
    <div>
      <Button> all</Button>
      <Button> done</Button>
      <Button> unDone</Button>
      
      {list.map(el=> <Task task = {el} key={el.id } />)}
      
    </div>
  )
}

export default ListTask
