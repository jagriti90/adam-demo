import React, { useState } from 'react'
import Inputcontrol from './Inputcontrol'
import { NavLink , useNavigate } from 'react-router-dom'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import {auth} from '../components/firebase';

import './Signup.css'

const Login = () => {
    const navigate = useNavigate();
    const [errorMsg , SetErrorMsg] = useState('');
const[subimitButtonDisabled, SetSubmitButtonDisabled] =useState(false)  
const [value , SetValue] = useState({
    email: '',
    pass: '',
});

const handleSubmission =()=>{
    if(!value.email || !value.pass){
        SetErrorMsg('Need to fill all');
        return;        
    }

    alert('Are your sure,   you want to login...')


    console.log(value); 
    // SetErrorMsg('');

    SetSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth ,value.email,value.pass)
    .then(async(res) =>{
        SetSubmitButtonDisabled(false );
            navigate('/');
            // console.log(user);
        })

        .catch((err)=>{
            SetSubmitButtonDisabled(false);
            SetErrorMsg(err.message)
            // console.log('Error-', err.message);
        })
};

  return (
    <>
     <section className='main_bar' >
        <div className=' mind_bar '>
            <h1 onClick={handleSubmission} className='hertx_bar'>Login</h1>
            <Inputcontrol placeholder='Enter email address '
            onChange={event=>
                SetValue(prev =>({...prev, email: event.target.value }))
        }
            />
            <Inputcontrol placeholder='Enter your password'
               onChange={event=>
                SetValue(prev =>({...prev, pass: event.target.value }))
        }/> 

{/* <input type="checkbox" onclick="myFunction()">Show Password </input> */}

            <div className='main_footar'>
            <div className='sec_foo'>
                <b>{errorMsg}</b>
                </div>

                <button disabled={subimitButtonDisabled} onClick={handleSubmission} className='mainbt'>Login</button>
                <p className='text-black font-semibold pt-6'>
                    Already you have an account? {" "}
                
                <span className='text-sky-400'>
                    <NavLink to='/signup'>Sign up</NavLink>
                </span>
                </p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Login
