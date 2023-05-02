import React, { useState } from 'react'
import Inputcontrol from './Inputcontrol'
import { NavLink , useNavigate } from 'react-router-dom'
import {createUserWithEmailAndPassword , updateProfile } from "firebase/auth";
import {auth} from '../components/firebase';
// import { AiFillFileImage } from "react-icons/ai";
import './Signup.css'


const Signup = () => {


    // const box = checkbox =()=>{
    //     if (box.type === "password") {
    //         box.type = "text";
    //       } else {
    //         box.type = "password";
            
    //       }
          
    //     }
    // }


    const navigate = useNavigate();
    const [errorMsg , SetErrorMsg] = useState('');
const[subimitButtonDisabled, SetSubmitButtonDisabled] =useState(false)  
const [value , SetValue] = useState({
    name: '',
    email: '',
    pass: '',
});

const handleSubmission =()=>{
    if(!value.name || !value.email || !value.pass){
        SetErrorMsg('Need to fill all');
        return;        
    }



    console.log(value); 
    // SetErrorMsg('');

    SetSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth ,value.email,value.pass)
    .then(async(res) =>{
        SetSubmitButtonDisabled(false );
        const user = res.user;
        await updateProfile(user, {
            displayName: value.name,
        });
        navigate('/');
            console.log(user);
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
            <h1 className='hertx_bar'>Sign up</h1>
            <Inputcontrol 
            placeholder='Enter your name '
            onChange={(event)=>
            SetValue((prev)=> ({...prev, name: event.target.value}))
        }/>

            <Inputcontrol 
            placeholder='Enter email address'
            onChange={(event)=>
                SetValue((prev)=> ({...prev, email: event.target.value}))
            }/> 

            <Inputcontrol
            type="password" value="FakePSW" id="myInput"
            placeholder='Enter your password'
            // onClick={box}
            onChange={(event)=>
                SetValue((prev)=> ({...prev, pass: event.target.value}))
            }/> 
            {/* <input type="checkbox" onClick={box} ></input> */}
            {/* <AiFillFileImage /> */}
            


            <div className='main_footar'>
                    <div className='sec_foo'>
                    <b>{errorMsg}</b>
                    </div>
                <button onClick={handleSubmission}  disabled={subimitButtonDisabled} className=' mainbt'>Signup</button>
                <p>
                    Already you have an account? {" "}
                
                <span>
                    <NavLink id='' to='/login'>Login</NavLink>
                </span>
                </p>
            </div>
        </div>
    </section>
    </>
  )
};

export default Signup;
