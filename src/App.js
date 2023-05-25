import React, { useState } from 'react'
import './App.css'

const App = () => {
  const[todos, setTodos] = useState([]);
  const[todo, setTodo] = useState("");
  const[editID, setEditID] = useState(0);

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(todo) {
      setTodos([{id:`${todo}-${Date.now()}`,todoName:todo}, ...todos]);
      setTodo("");
      setEditID(0);
    }
  }

  const handleDelete = (id) => {
    const fiteredTodos = todos.filter((item)=>{
      return item.id !=id;
    });
    setTodos([...fiteredTodos]);
  }

  const handleEdit = (id)=> {
    const editedTodo = todos.find((item)=>{
      return item.id==id;
    })
    handleDelete(id);
    setTodo(editedTodo.todoName);
    setEditID(id);
  }

  return (
    <div className='App'>
      <div className='container'>
        <h1>To Do List</h1>
        <form className='todoForm' onSubmit={handleSubmit}>
          <input className='input' type='text' value={todo} onChange={(e)=>{setTodo(e.target.value)}} />
          <button type='submit'>{editID?"Edit":"Go"}</button>
        </form>
        <ul className='allList'>
          {
            todos.map((item)=>{
              return(
                <li className='singleList' key={item.id}>
                  <span className='text'>{item.todoName}</span>
                  <button onClick={()=>handleEdit(item.id)}>Edit</button>
                  <button onClick={()=>handleDelete(item.id)}>Delete</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default App