import React from 'react'
import TodoItem from './TodoItem'

function Todos({todos, toggleComplete, deleteTodo}) {
  
  return (
    <ul className='flex flex-col mt-6'>
        { todos.map((todo,index)=> (
            <TodoItem todo={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
        ))}
    </ul>
  )
}

export default Todos