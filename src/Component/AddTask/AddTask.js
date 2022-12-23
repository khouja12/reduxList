import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTask } from '../../Js/Action/ListTask'
const AddTask = () => {

  const [Text, setText] = useState('');
  const dispatch = useDispatch()
  const handleAdd = (e) => {
    e.preventDefault()
    if (Text) {
      dispatch(addTask({ id: Math.random(), Text, isDone: false }))
    } else {
      alert(
        "can not add an empty text"

      )
    }
setText("")
  }

  return (
    <div>

      <Form.Control type="text" placeholder="add task" value={Text} onChange={(e) => setText(e.target.value)} />
      <Button  type='submit' onClick={handleAdd}> Add Task</Button>
    </div>
  )
}

export default AddTask
