import { useState, useEffect } from "react";
import CreateTodd from "./components/CreateTodd";
import Todo from "./components/Todo";

import "./App.css";

function App() {
 
  const [todos, setTodos] = useState([]);
useEffect(()=>{
  fetch("http://localhost:3000/todos").then(async (res) => {
    const info = await res.json();
  
    setTodos(info.todos);
  });
},[])
  
  return (
    <>
      <div className="card">
        <CreateTodd />

        <Todo todos={todos} />
      </div>
    </>
  );
}

export default App;
