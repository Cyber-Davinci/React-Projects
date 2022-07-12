import React from 'react'
import { ClipboardCheckIcon, MinusCircleIcon } from '@heroicons/react/outline'


function TodoItem({todo}) {
  return (
    <div>
       <li className='flex border rounded-lg p-3 relative mt-4'>
        { todo.completed ?<ClipboardCheckIcon className=' text-green-600 text-sm w-10'/> : null
 }
            <p className='mt-2 pl-3 cursor-pointer'>{todo.todoTask}</p>
            <MinusCircleIcon className=' absolute right-5 text-red-500 text-sm w-10 cursor-pointer'/>
       </li>
    </div>
  )
}

export default TodoItem