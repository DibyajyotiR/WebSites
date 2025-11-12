import React from 'react'
import { MdArrowDropDown } from "react-icons/md";

const TodoList = () => {
  return (
    <div className=''>
      <h1>TODO LIST</h1>
      <div>
        <p>Add Task</p>
        <p>All
            <MdArrowDropDown />
        </p>
      </div>
    </div>
  )
}

export default TodoList