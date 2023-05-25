import React from 'react'
import SingleTodos from './SingleTodos'

const TodoList = ({todos,handleEdit,handleDelete}) => {
  return (
    <ul className='allList'>
          {
            todos.map((item)=>{
              return(
                <SingleTodos key={item.id} item={item} handleEdit={handleEdit} handleDelete={handleDelete}/>
              )
            })
          }
        </ul>
  )
}

export default TodoList