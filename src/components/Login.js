import React, { useState } from 'react'
import Inputcontrol from './Inputcontrol'
import { NavLink , useNavigate } from 'react-router-dom'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import {auth} from '../components/firebase';

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
    <section className='bg-sky-200 h-full max-w-[1280px] min-h-screen justify-center items-center flex font-serif'>
        <div className=' min-w-[400px]  h-fit w-fit bg-white  shadow-sm rounded-lg p-12'>
            <h1 onClick={handleSubmission} className='text-sky-400 text-xl  font-serif font-semibold text-center p-6'>Login</h1>
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

            <div className='footar'>
            <div className='p-2 items-center text-center'>
                <b className='font-bold text-red-500 text-sm'>{errorMsg}</b>
                </div>

                <button disabled={subimitButtonDisabled} onClick={handleSubmission} className='bg-sky-400 p-3 w-[60vh] mt-8 text-white font-semibold'>Login</button>
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
