import React , { useState, useEffect} from 'react'
import { useDispatch } from "react-redux";
import { addTodo , handleEditSubmit, updateTodo } from '../redux/todoapp/actions';


export default function Form({editformVisibility,editTodo,cancelUpdate}) {

const dispatch = useDispatch();
 const [editValue,setEditValue]=useState('');

useEffect(() => {
   setEditValue(editTodo.todo);
 }
, [editTodo])



  const [todoValue,setTodoValue] = useState('');
  const handleSubmit = (e)=>{
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let todoObj = {
      id:time,
      todo:todoValue,
      completed:false
    }
    setTodoValue('');
    dispatch(addTodo(todoObj));
  }


  const editSubmit=(e)=>{
    e.preventDefault();
    let editedObj = {
      id:editTodo.id,
      todo:editValue,
      completed:editTodo.completed
    }
    dispatch(updateTodo(editedObj));
  }
  return (
<>
    {editformVisibility===false ? (
        <form onSubmit={handleSubmit}>
        <label> Add Your Todos Here </label>
        <div className='input-ans-btn'>
          <input placeholder='Add Here ------>' type='text' className='form-control' required  
            value={todoValue} onChange={(e)=>setTodoValue(e.target.value)}/>
            <button type='submit' className='btn'> ADD </button>
        </div>
      </form>
    ):(
      <form onSubmit={editSubmit}>
      <label> Update Your Todos Here </label>
      <div className='input-ans-btn'>
        <input type='text' className='form-control' required  
          value={editValue || ""} onChange={(e)=>setEditValue(e.target.value)}/>
          <button type='submit' className='btn'> UPDATE </button>
      </div>
      <button onClick={cancelUpdate} className=''>BACK</button>
    </form>
    )}
  
    </>
  )
}

