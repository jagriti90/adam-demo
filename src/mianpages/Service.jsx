import React from 'react'
import Card from './Card/Card'
import Sdata from './Card/Sdata'

const Service = () => {
  return (
    <>
      <div className='Service_bar'>
        <div>
          <p className='service_bar_section'> Our Services</p>
        </div>
       {
        Sdata.map((val, ind) =>{
          return <Card 
          imgscr= {val.imgscr}
          title ={val.title}
          />
        })
       }
      </div>
    </>
  )
}

export default Service