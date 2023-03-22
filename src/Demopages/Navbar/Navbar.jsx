import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <>
            <nav className='gpt__navbar'>
                <div className='gpt__navbar-link'>
                    <div className='gpt__navbar-link-logo'>
                        <p className='logo_name'>Perfectland</p>
                    </div>
                    <div className='gpt__navbar-links_container'>
                        <p><NavLink to= '/home'>Home</NavLink></p>
                        <p><NavLink to= '/about'>About</NavLink></p>
                        <p><NavLink to= '/service'>Services</NavLink></p>
                        <p><NavLink to= '/contact'>Contact</NavLink></p>

                    </div>
                </div>
                <div className='gpt__navbar-sign'>
                    <button className='npt_button' type='button' ><NavLink to='/signin'>Sign in</NavLink></button>
                    <button className='gpt_button' type='button'><NavLink to='/signin'>Sign up</NavLink></button>
                </div>

                <div className='gpt__navbar-menu'>

                </div>
            </nav>
        </>
    )
}

export default Navbar