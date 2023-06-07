import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Todos from './components/Todos';
import { useDispatch , useSelector} from "react-redux";
import { deleteAll } from './redux/todoapp/actions';
import { useState } from 'react';
function App() {



const [editTodo,setEditTodo] = useState('');

const [editformVisibility,setEditformVisibility] = useState(false);

const handleEditClick=(todo)=>{
    setEditformVisibility(true);
    setEditTodo(todo);
}
const cancelUpdate=()=>{
  setEditformVisibility(false);
}
const dispatch = useDispatch();
const todos = useSelector((state)=>state.operationsReducer);
  return (
    <div className="wrapper">
     <br>
     </br>
     <h1 className='heading'>TODO APP</h1>
     <Form editformVisibility={editformVisibility} editTodo={editTodo}  cancelUpdate={cancelUpdate} />
     <Todos handleEditClick={handleEditClick} editformVisibility={editformVisibility} />
     {todos.length > 0 && (
       <button onClick={()=>dispatch(deleteAll())} className='delete-all'> DELETE ALL</button>
     ) }
    </div>
  );
}

export default App;
