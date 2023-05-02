import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom';
import Common from './Common';
import Card from './Card/Card';
import Sdata from './Card/Sdata';
const Home = () => {
  return (
    <>
        <Common
        name='Grow your Business with'
        imgsrc='https://as2.ftcdn.net/v2/jpg/02/40/95/87/1000_F_240958778_EUaz5rsdy7fMqMlV7oqPYpXjxDuhJdOO.jpg'
        visit='/contact'
        btname='Get Started'
      />

{
        Sdata.map((val, ind) =>{
          return <Card 
          imgscr= {val.imgscr}
          title ={val.title}
          />
        })
       }
    </>
  )
}

export default Home