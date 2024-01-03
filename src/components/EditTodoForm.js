import React from 'react'
import { useState } from 'react'


const EditTodoForm = ({editTodo, task}) => {

  const [value, setValue] = useState("")

  const handleSubmit = e => {
    
    editTodo(value, task.id);

    e.preventDefault();

  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='Update task' onChange={(e) => {
          setValue(e.target.value)
        }} />
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}

export default EditTodoForm