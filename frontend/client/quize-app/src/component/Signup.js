import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './login.css'

export default function Signup() {

  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const SignupUser=(e)=>{ }

  return (
    <div className="outer_div"> 
      <form method='POST' className="log_form_cont">
          <h1 className='login-head'>Signup</h1>
          <label>Name:</label><br/>
          <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name" autoComplete="off"></input>
          <label>Email:</label><br/>
          <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email" autoComplete="off"></input>
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your Password" autoComplete="off"></input>
          <div className="button" onClick={SignupUser}>Signup</div>
          <div className="py-4">
              <p className="signup_link">
                  Have account ? <Link to="/login">Login</Link>
              </p>
          </div>
      </form>
    </div>
  )
}
