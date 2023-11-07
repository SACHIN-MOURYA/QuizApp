import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom';
import './login.css'
import { useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../api/appApi';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [loginUser, { isLoading }] = useLoginUserMutation();

    const handleLogin = async (e) => {
      e.preventDefault();
    
      try {
          const { data } = await loginUser({ email, password });
          if (data) {
              navigate("/quizeapp");
          }
      } catch (error) {
          console.error("Login failed:", error);
      }
  }

  const LoginUser=(e)=>{ }
  return (
    <div className="outer_div"> 
      <form method='POST' className="log_form_cont" onSubmit={handleLogin}>
          <h1 className='login-head'>Login</h1>
          <label>Email:</label><br/>
          <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email" autoComplete="off"></input>
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your Password" autoComplete="off"></input>
          <div className="button">
            <button type="submit" className='button_btn' disabled={isLoading}>
                      {isLoading ? 'Logging In...' : 'Login'}
            </button>
          </div>
          <div className="py-4">
              <p className="signup_link">
                  Have no account ? <Link to='/signup'>Signup</Link>
              </p>
          </div>
      </form>
    </div>
  )
}
