import React, { useState,useContext } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import UserContext from '../../../UserContext';
import { GoogleLogin,GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
// import Privateroute from './Privateroute';
const Form = () => {
  const message=useContext(UserContext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  // clientID="767105278376-r1rje2s5rfe7r3ck4pmq05qnt5uslsnj.apps.googleusercontent.com";

  // onSuccess =()=>{
  //   alert('Successfully Login');
  // }

  // onFailure =()=>{
  //   alert('Try Again');
  // }

  
  const handleSubmitt = () => {
    if (name === '') {
      alert('Username is Empty');
      return;
    }
    if (password === '') {
      alert('Password is Empty');
      return;
    }
    const storedRegisters = JSON.parse(localStorage.getItem('register')) || [];

    for (const value of storedRegisters) {
      if (name === value.username) {
        if (password === value.passwords) {
          alert('Login successful');
          // login(); 
          navigate(message);
          return; 
        } else {
          alert('Incorrect password');
          return; 
        }
      }
    }

    alert('Username not found');
  };
  

  return (
    
    <div>
      <div className='boxx'>
        {/* <p>{message}</p> */}
        <h1 className='Reg-head'>Login Yourself</h1><br />
        <form className='text-box-one'>
          <div>
            <input
              className='Input'
              onChange={(e) => setName(e.target.value)}
              type='text'
              placeholder='Username'
            />
          </div>
          <br />
          <div>
            <input
              className='Input'
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              placeholder='Password'
            />
          </div>
          <br />
          {/* <GoogleLogin
          clientId={clientID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          buttonText='Login with'
          isSignedIn={false}
          />
           */}
          <div>
            <button className='button' type='button' onClick={handleSubmitt}>
              <label className='login'>
                Login
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M16.5024 16.3755C16.1575 16.8069 16.2276 17.4362 16.659 17.7811C17.0903 18.1259 17.7196 18.0558 18.0645 17.6245L21.5628 13.2489C22.1466 12.5187 22.1466 11.4813 21.5628 10.7511L18.0645 6.37555C17.7196 5.94418 17.0903 5.87407 16.659 6.21895C16.2276 6.56383 16.1575 7.1931 16.5024 7.62447L19.2012 11L2.99927 11C2.44698 11 1.99927 11.4477 1.99927 12C1.99927 12.5523 2.44698 13 2.99927 13L19.2012 13L16.5024 16.3755Z'
                    fill='white'
                  />
                </svg>
              </label>
            </button>
          </div>
        </form>
        <br/>
        <center>
        <GoogleOAuthProvider clientId="767105278376-poc2rkqreob8tv4mnr9qprrmcitorqs9.apps.googleusercontent.com" >
      <GoogleLogin
      // text={continue_with	}
           theme='filled_blue'
           size='large'
           text='continue_with'
           shape='circle'
           onSuccess={(credentialResponse) => {
            alert('Google login successful');
var decoded = jwt_decode(credentialResponse.credential);
var token = credentialResponse.credential; // Assuming the token is directly accessible here
localStorage.setItem('decodedToken', JSON.stringify(decoded));
localStorage.setItem('accessToken', token);

navigate(message);

        }}
        
          
  onError={() => {
    console.log('Login Failed');
  }}
  useOneTap
/>
      </GoogleOAuthProvider></center>
      
        <br /><br /><br />
        <p className='p'>Have You been here?
          <Link to='/'>register</Link><br/>< Link to='/Dashboard'>Admin Side</Link>
        </p>
        
      </div>
    </div>
  );
};

export default Form;
