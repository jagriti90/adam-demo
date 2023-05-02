import React from 'react'
import './Inputcontrol.css'

const Inputcontrol = (props) => {
  return (
 <>
 <div className='main_section'>
    {props.label && <label className='label'>{props.label}</label>}
    <input   className=' input outline-none out_bar border-white p-5  border-2 border-b-sky-400  text-black hover:text-sky-400 focus:text-black' type='text' {...props}></input>
 </div>
 </>
  )
}

export default Inputcontrol
