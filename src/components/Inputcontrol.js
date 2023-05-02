import React from 'react'
import './Inputcontrol.css'

const Inputcontrol = (props) => {
  return (
 <>
 <div className='main_section flex flex-col gap-4'>
    {props.label && <label className='text-sm  text-gray-500 '>{props.label}</label>}
    <input  className=' outline-none  border-white p-5  border-2 border-b-sky-400  text-black hover:text-sky-400 focus:text-black' type='text' {...props}></input>
 </div>
 </>
  )
}

export default Inputcontrol
