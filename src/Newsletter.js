import React from 'react'
import './newsletter.css'
 import {AiOutlineMail} from 'react-icons/ai'

function Newsletter() {
  return (
    <div className='newsletter'>
        <h1 className='newsletter__title'>Join The Club</h1>
        <div className='newsletter__info'>
            <input className='newsletter__input' placeholder='Enter Your Email' />
            <button className='newsletter__mailIcon' title='Subscibe'>
                 <AiOutlineMail />
             </button>
           
        </div>
    </div>
  )
}

export default Newsletter
