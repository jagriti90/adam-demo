import React, { useState } from 'react'
import './Contact.css'
// import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom'
// import { auth } from '../components/firebase';
const Contact = () => {
  // const navigate = useNavigate();
  // const [errorMsg, setErrorMsg] =useState();
  // const[subimitButtonDisabled, SetSubmitButtonDisabled] =useState(false)  
  // const [data, setData] = useState({
  //   fullname: '',
  //   phone: '',
  //   email: '',
  //   message: '',

  // });
  // // console.log(data , 'valuename')
  // SetSubmitButtonDisabled(true);
  // createUserWithEmailAndPassword(auth, data.email, data.password )
  // .then(async(res) => {
  //   // Signed in 
  //   SetSubmitButtonDisabled(false);
  //   const user = res.user;
  //   await updateProfile(user, {
  //     displayName: data.name,
  // });
  //   navigate('./')
  // })
  // .catch((err) => {
  //   SetSubmitButtonDisabled(false);
  //   setErrorMsg= (err.message)
  //   // ..
  // });
  // const handleSubmission =()=>{
  //   if(!data.fullname || !data.phone || !data.email){
  //       setErrorMsg('Need to fill all')
  //       return;
  //   }
  // }
  // console.log(data, 'error');

  
// const InputEvent = (event) =>{
//   const{name, value} = event.target;
//   setData((preVal)=>{
//     return{
//       ...preVal,
//       [name]:value,
//     };
//   });
// };
//   const formSubmit= (e) =>{
//     e.preventDefault();
//     alert(`$ {data.fullname}`)
//   };



  return (
    <>
      <div className='contact_section'>
      <div className='p-2 items-center text-center'>
                <b className='font-bold text-red-500 text-sm'></b>
                </div>
        <div className='main_header_section'>
          <p className='main_header_name'>Contact us</p>

          <div className='detail_section'>
            <form>
            <form >
              <label className='name_section'>First name:</label><br />
              <input
                className='number_section'
                placeholder='Enter your name' /><br /><br 
               />
          </form>
            <form >
              <label className='digit_section'>Mobile Number</label><br />
              <input
                className='number_section'
                placeholder=' Enter your mobile number'
                /><br /><br />
            </form>
            <form >
              <label className='ea_section'>Email Address</label><br />
              <input className='number_section'
                placeholder='name@example.com' 
              
                /><br /><br />
            </form>
            </form>
          </div>
          
          <div>
            <form>
              <p><label
                >Messages</label></p>
              <textarea></textarea>

            </form>
            <form>
              <input id='btn' className='ending_section' type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact