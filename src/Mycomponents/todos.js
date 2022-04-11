import React from 'react';
import { Todo } from './todo';



//child component
export const Todos = (props) => {
  return (<div className='container'>
       <h1 className=' my-3'>Todos List</h1>
      {props.todos.length===0 ? 'No todos to show' :
       props.todos.map((todo) => {
        return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
       }
       )}
       
      
  </div>);
};
