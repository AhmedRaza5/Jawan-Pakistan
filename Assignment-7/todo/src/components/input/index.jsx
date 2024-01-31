import React from 'react'

const Input = (props) => {
  return (
    <div className='w-full'>
        <input className='w-full border p-2' required={props.required} id={props.id} type={props.type} placeholder={props.placeholder} onChange={(e)=> props.onchange(e.target.value,props.id)} />
    </div>
  )
}

export default Input