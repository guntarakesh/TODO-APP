import React from 'react'
import { useSelector , useDispatch } from 'react-redux' ;
import { removeTodo , handleCheckbox } from '../redux/todoapp/actions';


export default function Todos({handleEditClick , editformVisibility}) {
  const todos = useSelector((state)=>state.operationsReducer);
  const dispatch = useDispatch();
  return todos.map((todo)=>(
     <div key={todo.id} className='todo-box'>
      <div className='content'>
        {editformVisibility===false&&(
            <input type='checkbox'  checked={todo.completed}   
              onChange={()=>dispatch(handleCheckbox(todo.id))}
            ></input>
        )}
              
        <p style={todo.completed===true ? {textDecoration:'line-through'}:{textDecoration:'none'}}>
          {todo.todo}
        </p>
      </div>

      <div className='actions-box'>
      {editformVisibility===false&&(
        <>
            <span onClick={()=>handleEditClick(todo)}><i class="material-icons">edit</i></span>
          <span onClick={()=>dispatch(removeTodo(todo.id))}><i class="material-icons">delete</i></span>
        
        </>
      )}
         
        
      </div>
     </div>
  ))
}
