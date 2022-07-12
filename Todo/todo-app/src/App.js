import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([])
  const [datas, setDatas] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/todosDB").then(res=>res.json()).then(data=>{setTodos(data)})
  },[datas])

  const addTodo = (todo) =>{

    const requestOptions = {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify(todo)
    }
    fetch("http://localhost:3000/todosDB", requestOptions)
    .then(res=>res.json())
    .then(data=>{
      setTodos([...todos, data])

    })

  }

  const toggleComplete = (todo) =>{

    const requestOptions = {
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({...todo, completed:!todo.completed})
    }


    fetch(`http://localhost:3000/todosDB/${todo.id}`, requestOptions)
    .then(res=>res.json())
    .then(data=>{
      setDatas([...datas, data])
    })

  }

  const deleteTodo = (id) =>{

    const requestOptions = {
      method:"DELETE",
    }
    fetch(`http://localhost:3000/todosDB/${id}`, requestOptions).then(res=>{
      if(res.ok){
        setTodos(todos.filter(todo => todo.id !== id))
      }
    })
  }


  return (
    <div className=" h-4/5">
      <div className="mx-3  md:mx-14 md:mt-20 mt-10 h-auto min-h-full ">
      <div className="text-center">
        <h2 className="">Todo-s</h2>
      </div>
        <AddTodo addTodo={addTodo}/>
        <Todos todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
      </div>
    </div>
  );
}

export default App;
