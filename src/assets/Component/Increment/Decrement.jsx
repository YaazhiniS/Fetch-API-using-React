import React,{ useState } from 'react'
import './App.css'

function App() {
const [count,setCount]=useState(40);
 const increHandler=()=>{
  setCount((val)=>val+1);
 }
 const decreHandler=()=>{
  setCount((val)=>val-1);
 }
  return (
    <div className="app_main">
      <h1>Increment/Decrement counter</h1>
      <div className="app_box">
      
      <button className="btn" onClick={increHandler}>Increment</button>
      <h3>{count}</h3>
      <button className="btn" onClick={decreHandler}>Decrement</button>
      </div>
    </div>
  )
}

export default App