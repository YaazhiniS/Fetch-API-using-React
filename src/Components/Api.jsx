import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import './Api.css'

 function Api() {
  const[value,setValue]=useState([])

  useEffect(()=>{
    fetch ("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(data=>setValue(data))
    .catch(err=>console.log(err))

  },[])

  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {value.map((user, index) => (
          <tr key={index}>
            <td>{index+1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}
export default Api;
