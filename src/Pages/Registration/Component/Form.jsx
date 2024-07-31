import React, { useState,useEffect } from 'react';
import '../Register.css';
import { useNavigate } from 'react-router-dom';
import Context from './Context';
const Form = () => {
  const [option, setOption] = useState('');
  const [firstname,setFirstname]=useState('');
  const [lastname,setLastname]=useState('');
  const [username,setUsername]=useState('');
  const [number,setNumber]=useState('');
  const [passwords,setPasswords]=useState('');
  const [age,setAge]=useState('');
  const [registration,setRegistration]=useState([]);
  const navigate = useNavigate();
 
  useEffect(() => {
    const savedRegistration = JSON.parse(localStorage.getItem('register'));
    if (savedRegistration) {
      setRegistration(savedRegistration);
    }
  }, []);

  const handleSubmitt = () => {
    const storedRegisters = JSON.parse(localStorage.getItem('register')) || [];

    for (const value of storedRegisters) {
      if (username === value.username) {
       alert('User Name is Already Exist');
      }
    }
    if (
      firstname === '' &&
      lastname === '' &&
      username === '' &&
      number === '' &&
      passwords === '' &&
      age === '' &&
      option === ''
    ) {
      alert('Please fill out all fields');
      return;
    }

    if (age < 18) {
      alert('Age must be at least 18');
      return;
    }

    const register = {
      firstname,
      lastname,
      username,
      number,
      passwords,
      age,
      option,
    };

    setRegistration([...registration, register]);
    localStorage.setItem('register', JSON.stringify([...registration, register]));

    setFirstname('');
    setLastname('');
    setUsername('');
    setNumber('');
    setPasswords('');
    setAge('');
    setOption('');
    alert('Register Successfully')
    navigate('/login');
  };

  return (
    <div>
      <Context.Provider value={username}>
      <h1 className='Reg-head'>Register Yourself</h1>
      <form>
        <div className='textbox'>
          <input type='text' onChange={(e) => setFirstname(e.target.value)} name="first_name" required pattern="[A-Za-z\s]+" title="Please enter a valid name (letters and spaces only)" placeholder='First Name' />
          <input type='text' onChange={(e) => setLastname(e.target.value)} name="first_name" required pattern="[A-Za-z\s]+" title="Please enter a valid name (letters and spaces only)" placeholder='Last Name' />
        </div>
        <div>
          <input className='textboxes' onChange={(e) => setUsername(e.target.value)}  type='text' pattern="[@A-Za-z]+" title="Please enter a valid user name (only @, letters)" placeholder='Username' />
          <input className='textboxes' onChange={(e) => setNumber(e.target.value)} pattern="[0-9]{11}" title="Please enter a valid 11-digit phone number" name="num" placeholder='Phone Number' />
          <input className='textboxes' onChange={(e) => setPasswords(e.target.value)} pattern="[A-Za-z0-9]+" title="Please enter a password with only letters and numbers" type='password' placeholder='Password' />
          <input className='textboxes' onChange={(e)=>setAge(e.target.value)}  type='age' title='Valide for Only Above 18 year' placeholder='Age' />
        </div>
        <label>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;<b>Gender</b></p>
        </label>
        <input
          className='radio'
          type='radio'
          value='Male'
          checked={option === 'Male'}
          onChange={(e) => setOption(e.target.value)}
        />
        <label>Male</label>
        <input
          className='radio'
          type='radio'
          value='Female'
          checked={option === 'Female'}
          onChange={(e) => setOption(e.target.value)}
        />
        <label>Female</label><br /><br /><br/>
        <button onClick={handleSubmitt} >
          <label className='button'>Sign Up
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M16.5024 16.3755C16.1575 16.8069 16.2276 17.4362 16.659 17.7811C17.0903 18.1259 17.7196 18.0558 18.0645 17.6245L21.5628 13.2489C22.1466 12.5187 22.1466 11.4813 21.5628 10.7511L18.0645 6.37555C17.7196 5.94418 17.0903 5.87407 16.659 6.21895C16.2276 6.56383 16.1575 7.1931 16.5024 7.62447L19.2012 11L2.99927 11C2.44698 11 1.99927 11.4477 1.99927 12C1.99927 12.5523 2.44698 13 2.99927 13L19.2012 13L16.5024 16.3755Z" fill="white" />
            </svg>
          </label>
        </button>
      </form>
      </Context.Provider>
    </div>
  );
};

export default Form;