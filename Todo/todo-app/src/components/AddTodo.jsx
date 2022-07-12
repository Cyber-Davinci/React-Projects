import React from 'react'
import { useState } from 'react'
import { PlusSmIcon } from '@heroicons/react/solid'
import {v4 as uuidv4} from "uuid";


function AddTodo({addTodo}) {
  const [todo, setTodo] = useState({
    id:"",
    todoTask:"",
    completed:false,
  })

  const handleInputTodoChange = (e)=>{
    setTodo({...todo, todoTask:e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(todo.todoTask.trim()){
      addTodo({...todo, id:uuidv4()})

      setTodo({...todo, todoTask:""})
    }
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <div className='flex mx-auto justify-center mt-10'>
          <input className='border rounded-lg rounded-tr-none rounded-br-none pl-3 w-96' type="text" placeholder='add new todo...'  
          value={todo.todoTask}
          onChange={handleInputTodoChange}
          />
            <PlusSmIcon className='w-12 border cursor-pointer text-green-500' onClick={handleSubmit}/>
          </div>

        </form>
    </div>
  )
}

export default AddTodo