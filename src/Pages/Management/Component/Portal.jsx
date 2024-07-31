import React from 'react';
import '../Manage.css';
import { NavLink, Outlet } from 'react-router-dom';

const Portal = () => {
  return (
    <div className='selection'>
      <NavLink exact to='/manage/' className='link'>
        <label className='doctor' >Doctor</label>
      </NavLink>
      <NavLink exact className='link' to='/manage/Appointment' >
        <label className='doctor' >  Appointment </label>
      </NavLink>
      <Outlet />
    </div>
  );
}

export default Portal;
