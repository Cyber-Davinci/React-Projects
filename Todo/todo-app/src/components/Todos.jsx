import React from 'react'
import TodoItem from './TodoItem'

function Todos({todos}) {
  return (
    <ul className='mt-6 divide-y'>
        { todos.map((todo,index)=> (
            <TodoItem todo={todo} key={index}/>
        ))}
    </ul>
  )
}

export default Todos