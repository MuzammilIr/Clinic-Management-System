import React from 'react';
import { Navigate } from 'react-router-dom';
import Manage from '../../Management/Manage';

const Privateroute = () => {
  const storedToken = localStorage.getItem('accessToken'); // Get the token from local storage

  if (!storedToken) {
    return <Navigate to="/login" />;
  } else {
    return <Manage/>
  }
};

export default Privateroute;
