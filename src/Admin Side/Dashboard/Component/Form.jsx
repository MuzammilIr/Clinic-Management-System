import React, { useState,useEffect, } from 'react';
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { v4 as uuidv4 } from 'uuid';
import jwt_decode from "jwt-decode";
import '../Dashboard.css'
const Form = () => {
    const [mail,setMail]=useState('');
    const [password,setPassword]=useState('');
    const [reg,setReg]=useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const savedRegistration = JSON.parse(localStorage.getItem('register'));
        if (savedRegistration) {
          setReg(savedRegistration);
        }
      }, []);
    const handleSubmitt=()=>{
      if (mail ===''){
        alert('Enter mail');
      }
      if (password===''){
        alert('password is empty')
      }
      const  register={
          id: uuidv4(),
            mail,
            password,
        }
        setReg([...reg,register]);
        localStorage.setItem('register',JSON.stringify([...reg,register]));
        navigate('/Appointment/');
    }
  return (
    <div>
        <h2 className='form-heading-admin-side' >Welcome to CMS, Admin</h2>
      <form>
        <div className='flex-box-admin-side' >
        <div className='text-box-admin-side' >
        <input type='text' 
        placeholder='Email' 
        onChange={(e)=>{setMail(e.target.value)}}
        />
        </div>
        <div className='text-box-admin-side  padding-top' >
        <input type='text' 
        placeholder='Password' 
        onChange={(e)=>{setPassword(e.target.value)}}
         />
        </div>
        <button 
        className='button-admin-side padding-top'
        onClick={handleSubmitt}
        >
            <div className='flex-box-button-admin-side' >
            <b>Continue to Dashboard</b>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
             <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0021 16.3755C16.6573 16.8069 16.7274 17.4362 17.1587 17.7811C17.5901 18.1259 18.2194 18.0558 18.5643 17.6245L22.0625 13.2489C22.6464 12.5187 22.6464 11.4813 22.0625 10.7511L18.5643 6.37555C18.2194 5.94418 17.5901 5.87407 17.1587 6.21895C16.7274 6.56383 16.6573 7.1931 17.0021 7.62447L19.7009 11L3.49902 11C2.94674 11 2.49902 11.4477 2.49902 12C2.49902 12.5523 2.94674 13 3.49902 13L19.7009 13L17.0021 16.3755Z" fill="white"/>
            </svg>
            </div>
            </button>
              <center>
        <GoogleOAuthProvider clientId="767105278376-poc2rkqreob8tv4mnr9qprrmcitorqs9.apps.googleusercontent.com" >
      <GoogleLogin
      // text={continue_with	}
           theme='filled_blue'
           size='large'
           text='continue_with'
           shape='circle'
  // onSuccess={credentialResponse => {
  //   alert('Login successful');
  //   console.log(credentialResponse);
  //   navigate('/Appointment/');
  // }}
  onSuccess={(credentialResponse) => {
    alert(' login successful');
    var decoded = jwt_decode(credentialResponse.credential);
    localStorage.setItem('decodedTokens', JSON.stringify(decoded));
    navigate('/Appointment/')
}}
  onError={() => {
    console.log('Login Failed');
  }}
  useOneTap
/>
      </GoogleOAuthProvider></center>
        </div>
      </form>
    </div>
  )
}

export default Form
