import React from 'react'

const Button = (props) => {
  return (
    <div className='spebtn'>
       <a href="#"> <button>{props.text}</button></a>
    </div>
  )
}

export default Button