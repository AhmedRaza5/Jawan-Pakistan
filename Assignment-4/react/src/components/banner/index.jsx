import React from 'react'
import './banner.css'

const Bannner = () => {
  return (
    <div className='banner'>
    <div className='inner'>
        <h1>Generate more leads with a <br /> professional landing page!</h1>
        <div className='email'>
            <input type="text" placeholder='Email Address'/>
            <button>Submit</button>
        </div>
    </div>
    </div>
  )
}

export default Bannner
