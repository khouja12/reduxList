import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editTask } from '../../Js/Action/ListTask';

const Edit = ({ task }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [newTask, setNewTask] = useState(task.Text)
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(editTask(task.id, newTask))
    handleClose()
  }
  return (
    <div>


      <Button variant="primary" onClick={handleShow}>
        Edit Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Form.Control type="text" placeholder="Edit task" value={newTask} onChange={(e) => { setNewTask(e.target.value) }} />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Edit
