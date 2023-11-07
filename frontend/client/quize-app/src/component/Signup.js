import React from 'react'
import { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import './login.css'
import {useSignupUserMutation} from '../api/appApi';

export default function Signup() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [signupUser, { isLoading }] = useSignupUserMutation();
  const navigate = useNavigate();

  async function handleSignup(e) {
      e.preventDefault();
      // signup the user
      signupUser({ name, email, password}).then(({ data }) => {
          if (data) {
              console.log(data);
              navigate("/login");
          }
      });
  }

  return (
    <div className="outer_div"> 
      <form method='POST' className="log_form_cont" onSubmit={handleSignup}>
          <h1 className='login-head'>Signup</h1>
          <label>Name:</label><br/>
          <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name" autoComplete="off"></input>
          <label>Email:</label><br/>
          <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email" autoComplete="off"></input>
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your Password" autoComplete="off"></input>
          <div className="button">
            <button type="submit" className='button_btn' disabled={isLoading}>
                  {isLoading ? 'Signing Up...' : 'Signup'}
            </button>
          </div>
          {/* <button type="submit" className="button" disabled={isLoading}>
                {isLoading ? 'Signing Up...' : 'Signup'}
          </button> */}
          <div className="py-4">
              <p className="signup_link">
                  Have account ? <Link to="/login">Login</Link>
              </p>
          </div>
      </form>
    </div>
  )
}
