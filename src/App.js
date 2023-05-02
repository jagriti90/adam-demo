import React from 'react'
import Hero from './mianpages/Hero';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './mianpages/Home'
import Contact from './mianpages/Contact';
import About from './mianpages/About';
import Service from './mianpages/Service';
import Navbar from './Demopages/Navbar/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
// import Switch from "react-switch";

// import Redirect from '.react-router-redirector';

import {
  Route,
  Routes
} from 'react-router-dom';


const App = () => {
  return (
    <>
    <Navbar />
    {/* <Switch> */}
    <Routes>
    <Route exact path='/' element = { <Hero /> } />
    <Route exact path='/home' element = { <Home /> } />
    <Route exact path='/contact' element = { <Contact /> } />
    <Route exact path='/about' element = { <About /> } />
    <Route exact path='/service' element = { <Service /> } />
    <Route exact path='/signup' element = { <Signup /> } />
    <Route exact path='/login' element = { <Login /> } />
    {/* <Route path='/' component = { Home } /> */}
    {/* <Redirect to='/' /> */}
    </Routes>
    {/* </Switch> */}
    </>
  )
}

export default App