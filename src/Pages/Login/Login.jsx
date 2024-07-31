import React from 'react'
import Head from './Component/Head'
import Image from './Component/Image'
import Form from './Component/Form'
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import { GoogleLogin } from '@react-oauth/google';
const Login = () => {
  return (
    <div>
       {/* <GoogleOAuthProvider clientId="767105278376-poc2rkqreob8tv4mnr9qprrmcitorqs9.apps.googleusercontent.com" >
      <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
  useOneTap
/>;
      </GoogleOAuthProvider> */}
      <div>
        <Head/>
        <div className='comp' >
            <Image/>
            <Form/>
            
        </div>
      </div>
    </div>
  )
}

export default Login
