import React from 'react'
import './home.css'
import img from '../images/quize_home.jpg'
// import { Link } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'

export default function Home() {
  return (
    <div className='container_div'>
      <div className='outer_div'>
            <div className='inner_div'>
                <div className='container'>
                    <div className='content_div'>
                        <h2 className='text_des'>Welcome to quiz app</h2>
                        <div className='user-handle'>
                            <LinkContainer to='/login'>
                                <button className='but_start'>get started</button>
                            </LinkContainer>
                        </div>
                    </div>
                </div>
                <div className='img-container'>
                    <img src={img} className='img_home' alt='img/home' />
                </div>
            </div>
      </div>
    </div>
  )
}
