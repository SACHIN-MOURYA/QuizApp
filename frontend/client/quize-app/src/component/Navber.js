import React from 'react'
import './Navber.css'
import { LinkContainer } from 'react-router-bootstrap'
// import Nav from 'react-bootstrap/Nav'

export default function Navber() {
  return (
    <div className='nav_out_bar'>
      <div class="navbar">
        <div class="navbar-title">
          <LinkContainer to='/'>
            <h2><b>Q</b>uiz app</h2>
          </LinkContainer>
        </div>
        <div class="navbar-right">
          <LinkContainer to='/login'>
            <button className='login_but'>Login</button>
          </LinkContainer>
          {/* <a href="#login">Login</a> */}
          {/* <a href="#logout">Logout</a> */}
        </div>
      </div>
    </div>
  )
}
