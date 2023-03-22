import React from 'react'
import Sdata from './Sdata'
import './Card.css'
import { NavLink } from 'react-router-dom';
const Card = (props) => {
  return (
    <>
      <div className='cards'>
        <div className='card'>
          <img className='img_section' src={props.imgscr} />
          <div className='card_body'>
            <p className='card_title'>{props.title}</p>
            <p className='card_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              ratione adipisci.</p>
            <button className='btn'>
              <NavLink to='' href='#' className='btn_primary'>
                Go Somewhere
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card