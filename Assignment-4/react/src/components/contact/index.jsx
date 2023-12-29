import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact1'>
        <h3>Ready to get started? Sign up now!</h3>
        <div className='email'>
            <input type="text" placeholder='Email Address'/>
            <button>Submit</button>
        </div>
        </div>
    </div>
  )
}

export default Contact