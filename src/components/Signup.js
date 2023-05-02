import React, { useState } from 'react'
import Inputcontrol from './Inputcontrol'
import { NavLink , useNavigate } from 'react-router-dom'
import {createUserWithEmailAndPassword , updateProfile } from "firebase/auth";
import {auth} from '../components/firebase';
// import { AiFillFileImage } from "react-icons/ai";


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
    <section className='bg-sky-200 h-full max-w-[1280px] min-h-screen justify-center items-center flex font-serif' >
        <div className=' min-w-[400px]  h-fit w-fit bg-white  shadow-sm rounded-lg p-12'>
            <h1 className='text-sky-400 text-xl  font-serif font-semibold text-center p-6'>Login</h1>
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
            


            <div className='gap-3'>
                    <div className='p-2 items-center text-center'>
                    <b className='font-bold text-red-500 text-sm'>{errorMsg}</b>
                    </div>
                <button onClick={handleSubmission}  disabled={subimitButtonDisabled} className=' mainbt bg-sky-400 p-3 w-[60vh] mt-4 text-white font-semibold'>Signup</button>
                <p className='text-black font-semibold pt-6'>
                    Already you have an account? {" "}
                
                <span className='text-sky-400'>
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
