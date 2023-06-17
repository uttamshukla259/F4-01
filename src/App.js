

import React, { useState } from "react"
import "./App.css"

const App=()=>{
  let [name,setName]=useState("");
  let [email,setEmail]=useState("");
  let [password,setPassword]=useState("");
  let [conPassword,setConPassword]=useState("");
  let [message,setMessage]=useState("");
  let [success,setSuccess]=useState(false);

  function validation(){
    if(name=="" || email=="" || password=="" || conPassword==""){
      setMessage("Error : All the fields are mandatory....")
      setSuccess(false)
    }
    else if(password!==conPassword){
      setMessage("Password Mismatched")
      setSuccess(false)
    }
    else{
      setMessage("Successfully Signed Up!")
      setSuccess(true)
    }

  }
  return (

    <div className="app">
        <h1>SignUp</h1>
        <div id="input">
        <label for="name">Full Name.</label>
        <input type="text" id="name" onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div id="input">
        <label for="Email">Email.</label>
        <input type="email" id="email" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div id="input">
        <label for="Password">Password.</label>
        <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div id="input">
        <label for="Confirm-password">Confirm Password.</label>
        <input type="password" id="con-password" onChange={(e)=>setConPassword(e.target.value)}/>
        </div>
        <p style={{color:success?'green':'red'}}>{message}</p>
        <button onClick={validation}>Signup</button>
    </div>
  )
}
export default App