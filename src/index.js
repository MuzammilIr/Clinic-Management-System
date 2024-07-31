import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import Modal from 'react-modal';
// import { GoogleOAuthProvider } from '@react-oauth/google';

Modal.setAppElement('#root'); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <GoogleOAuthProvider clientID="767105278376-poc2rkqreob8tv4mnr9qprrmcitorqs9.apps.googleusercontent.com"> */}
      <App />
    {/* </GoogleOAuthProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
