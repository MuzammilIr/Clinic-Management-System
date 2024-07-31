// Protectedroutes.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import Appointement from '../../Appointment/Appointment';
const Protectedroutes = ({ condition }) => {
  const storedRegisters = JSON.parse(localStorage.getItem('decodedTokens')) || [];

  if (storedRegisters.length === 0) {
    // If no decodedToken found or it's an empty array, redirect to '/login'
    return <Navigate to="/login" />;
  } else {
    const firstValue = storedRegisters; // Assuming decodedToken is an array
    if (firstValue.email !== '') {
      // If email is not empty, no need to redirect, just render the component
      return <Appointement />; // Replace with the component you want to render
    } }
};

export default Protectedroutes;
