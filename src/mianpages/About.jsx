import React from 'react'
import Common from './Common'
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Common
        name='Welcom to About page'
        imgsrc='https://t4.ftcdn.net/jpg/03/00/27/37/240_F_300273788_BPUPMxoK8QEvzXlTblUl1QqEStAtC6oD.jpg'
        visit='/contact'
        btname='Contact now'
      />
    </>
  )
}

export default About