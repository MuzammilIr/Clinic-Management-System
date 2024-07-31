import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import Head from './Component/Head';
import Image from './Component/Image'
import Form from './Component/Form';
const Register = () => {
  return (
    <div className='container'>
      <Head/>
      <div className='sub-container'>
        <Image/>
        <div className='box'>
            <Form/>
          <br/><br/>
          <p className='p-1' >Have You been here?
            <Link to='/login' >login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
