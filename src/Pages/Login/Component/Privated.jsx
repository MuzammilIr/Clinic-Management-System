import React  from 'react';
import { Navigate,Outlet } from 'react-router-dom';

import Manage from '../../Management/Manage';
// import Login from '../Login';

const Privated = ({ condition }) => {
    console.log(condition)
   if(condition) {
    return <> <Navigate to="/login" /><Outlet/></>;
  }
  else{
    return <Manage/>
  }
};

export default Privated;
