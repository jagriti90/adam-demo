import React from 'react'
import { NavLink } from 'react-router-dom';
const Common = (props) => {
    return (
        <>
            <section id='header' className='main_section md:w-1280px' >
                <div className='home_section'>
                    <div className='middle_section'>
                        <div>
                            <div>
                                <p className='home_section_1'>
                                    {props.name}
                                    <p className='p_bar'>Perfectland</p>
                                </p>
                                <p className='home_section_2'>
                                    We are the team of talented developer making websites
                                </p>
                            </div>
                        </div>
                        <div className='button_section'>
                            <button className='btn_section'>
                                <NavLink to={props.visit}>{props.btname}</NavLink>
                            </button>

                        </div>
                    </div>
                    <div className='animation_bar'>
                        <img className='img_animated'
                            src={props.imgsrc}
                            alt='common_img' />
                    </div>
                </div>

            </section>
        </>
    )
}

export default Common