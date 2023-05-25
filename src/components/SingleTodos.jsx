import React from 'react'

const SingleTodos = ({item, handleEdit, handleDelete}) => {
  return (
    <li className='singleList' key={item.id}>
        <span className='text'>{item.todoName}</span>
        <button onClick={()=>handleEdit(item.id)}>Edit</button>
        <button onClick={()=>handleDelete(item.id)}>Delete</button>
    </li>
  )
}

export default SingleTodos