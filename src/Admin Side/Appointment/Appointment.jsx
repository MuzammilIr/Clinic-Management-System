import React, { useState,useEffect } from 'react';
import Header from './Component/Header'
import './Appointment.css'
import { NavLink, Outlet } from 'react-router-dom';
const Appointment = () => {
  const [storedRegisters, setStoredRegisters] = useState([]);
  const [storedRegister, setStoredRegister] = useState([]);

  useEffect(() => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem('Doctorss')) || [];
    setStoredRegisters(dataFromLocalStorage);

    const dataFromLocalStorag = JSON.parse(localStorage.getItem('doctorData')) || [];
    setStoredRegister(dataFromLocalStorag);
  }, []);
  
  // const storedRegisters = JSON.parse(localStorage.getItem('Doctorss')) || [];
  // const storedRegister = JSON.parse(localStorage.getItem('doctorData')) || [];
  let appointment=storedRegisters.length;
  let Doctor=storedRegister.length;
  return (
    <div  >
      <Header/>
      <NavLink to='/Appointment/' className='link paddingLeft'>
      <label>Dashboard</label>
      </NavLink>
      <NavLink to='/Appointment/Appoint' className='link'>
      <label>{`Doctor  (${Doctor})`}</label>
      </NavLink>
      <NavLink to='/Appointment/Doctors' className='link'>
      <label>{`Appointment  (${appointment})`}</label>
      </NavLink>
      <Outlet/>
    </div>
  )
}

export default Appointment
