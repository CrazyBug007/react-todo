import React, { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

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
      return item.id !==id;
    });
    setTodos([...fiteredTodos]);
  }

  const handleEdit = (id)=> {
    if(todo) {
      return;
    }
    const editedTodo = todos.find((item)=>{
      return item.id===id;
    })
    handleDelete(id);
    setTodo(editedTodo.todoName);
    setEditID(id);
  }

  return (
    <div className='App'>
      <div className='container'>
        <h1>To Do List</h1>
        <TodoForm handleSubmit={handleSubmit} todo={todo} setTodo={setTodo} editID={editID} />
        <TodoList todos={todos} handleEdit={handleEdit} handleDelete={handleDelete} />
      </div>
    </div>
  )
}

export default App