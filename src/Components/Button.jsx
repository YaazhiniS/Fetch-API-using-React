import {useState,useEffect} from 'react';
import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
function App() {
  const[isCompleteScreen,setIsCompleteScreen]=useState(false);
  const[allTodos,setTodos]=useState([]);
  const[newTitle,setNewTitle]=useState("");
  const[newDescription,setNewDescription]=useState("");
  const[currentEdit,setCurrentEdit]=useState("")
  const handleAddTodo=()=>{
    let newTodoItem={
      title:newTitle,
      description:newDescription
    }
    let updatedTodoArr=[...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem('todolist',JSON.stringify(updatedTodoArr))
  }
  const handleDeleteTodo=(index)=>{
    let reducedTodo=[...allTodos];
    reducedTodo.splice(index);
    localStorage.setItem('todolist',JSON.stringify(reducedTodo));
    setTodos(reducedTodo)
  };
  useEffect(()=>{
    let savedTodo=JSON.parse(localStorage.getItem('todolist'))
    if (savedTodo){
      setTodos(savedTodo);
    }
  },[])
 const handleEdit=(ind)=>{
  setCurrentEdit(savedCompletedTodo);
 }
 const handleUpdateTitle=(value)=>{}
 const handleUpdatetoDescription=(value)=>{}
 return (
  <div className="App">
      <h1>Todo-list</h1>
      <div className='todo-wrapper'>
        <div className='todo-input'>
          {/* Title tag */}
          <div className='todo-input-item'>
            
            <label htmlFor="title">Title</label>
            <input type="text" value={newTitle} onChange= {(e)=>setNewTitle(e.target.value) } placeholder='What is the title?' />
          </div>
          {/* Description tag */}
          <div className='todo-input-item'>
            <label htmlFor="Description">Description</label>
            <textarea id="Description" name="Description" value={newDescription} onChange= {(e)=>setNewDescription(e.target.value) } rows="8" cols="40"></textarea>
          </div>
          {/* button */}
          <div className='todo-input-item'>
            <button type="button" onClick={handleAddTodo} className='PrimaryBtn'>Add new task</button>
          </div>
          </div>
        {/* Status of the task-completed/pending */}
        {/* <div className='btn-area'>
            <button className={`tertiaryBtn ${isCompleteScreen===false && 'active'} `} onClick={()=>
              setIsCompleteScreen(false)}></button>
            <button className={`tertiaryBtn ${isCompleteScreen===true && 'active'} `} onClick={()=>
              setIsCompleteScreen(true)}></button>
        </div> */}
          {/*Actual description of to-do list */}
        <div className='todo-list'>
          {allTodos.map((item,index)=>
           
            { 
             
             
               
             return(
            
              <div className='todo-list-item' key={index}>
              <div>
              <input type='button' className={`checkbox ${!isCompleteScreen && 'active'} `}  value=""></input>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div>
                <button type="button" className={`secondaryBtn `} onClick={()=>
               setIsCompleteScreen(true)} >  <FontAwesomeIcon icon={faCheck} /></button>
                <button type="button" className='secondaryBtn' onClick={()=>handleEdit(index)}>Edit</button>
              <button type="button" onClick={()=>handleDeleteTodo(index)}className='secondaryBtn'>Delete</button>
              </div>
              </div>
             )
            }
            }
            )
          }
        </div>
       </div>
  </div>
  )
}

export default App
