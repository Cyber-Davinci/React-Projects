import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) =>{
    setTodos([todo, ...todos])
    // console.log(todo, todos)
  }

  // console.log(todos)

  return (
    <div className=" h-2/5">
      <div className="mx-14 my-20  h-auto min-h-full ">
      <div className="text-center">
        <h2 className="">Todo-s</h2>
      </div>
        <AddTodo addTodo={addTodo}/>
        <Todos todos={todos}/>
      </div>
    </div>
  );
}

export default App;
