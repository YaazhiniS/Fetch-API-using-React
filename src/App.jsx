/* eslint-disable no-unused-vars */
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css'
function App() {
const[allTodos,setTodos]=useState([]);
const[newTitle,setNewTitle]=useState("");
const[newDescription,setNewDescription]=useState("");
const handleAddTodo=()=>{
  let newTodoItem={
    id:allTodos.length+1,
    title:newTitle,
    description:newDescription,
    status:false
  }
  let updatedTodoArr=[...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
}
function handleEditStatus(id){
  const updatedTodo=allTodos.map((t)=>{
    if(t.status){
      return t;
    }
    if (t.id===id){
      return{...t,status:!t.status};
    }
    return t;
  });
  setTodos(updatedTodo);
  }
  function getCompleted() {
    return allTodos.filter((t) => t.status).length;
  }

  console.log(getCompleted() + " / " + allTodos.length);
  
  // Handling delete 
  const handleDeleteTodo=(index)=>{
    let reducedTodo=[...allTodos];
    reducedTodo.splice(index,1);
    setTodos(reducedTodo)
  };


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
  {/*Actual description of to-do list */}
  <div className="todo-list">
      
      {allTodos.map((item,index) => {
        const { id,title,description, status } =item;
        return (
          <div key={id} className="todo-list-item">
            <h3>{id}</h3>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{status ? "green" : "red"}</p>
            {!status && (
              <button
                onClick={() => {
                  handleEditStatus(id);
                }}
              >tick btn
              </button>
            )}
    {/*Delete */}
    <div>
    <button type="button" onClick={()=>handleDeleteTodo(index)}className='secondaryBtn'>Delete</button>
    </div>
    </div>
          
        );
      })}
    
    
  </div>
   
    
          
  </div>
 </div>
)
}
export default App;