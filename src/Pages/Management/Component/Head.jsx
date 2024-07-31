import React, { useState,useEffect } from 'react'
import '../Manage.css'
import Modal from 'react-modal';
import Logout from '../Logout';
const Head = () => {
    const [openmodal,setOpenmodal]=useState(false);
    useEffect(() => {
        // Disable back navigation within the Manage component
        window.history.pushState(null, document.title, window.location.href);
        window.addEventListener('popstate', handlePopstate);
    
        return () => {
          window.removeEventListener('popstate', handlePopstate);
        };
      }, []);
    
      const handlePopstate = (event) => {
        window.history.pushState(null, document.title, window.location.href);
      }
    // const [names,setNames]=useState('');
    // const[image,setImage]=useState('');
    const modaltoggle=()=>{
        setOpenmodal(!openmodal);
    }
    const storedRegisters = JSON.parse(localStorage.getItem('decodedToken')) || [];
    
        const image=storedRegisters.picture;
        const names = storedRegisters.name;

    console.log('storedRegisters:', storedRegisters);
  return (
    <div className='heading' >
        <h1 className='h1' >Clinic Management System</h1>
        {/* <img className='svgs' width={28} height={28} src={image} alt="images" /> */}
        <div className='icon'>
            {/* <h1>{names}</h1> */}
            
            <div className='head-box' >
                <div className='Alhubi' >
                <svg className='svg-margin' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M15.4042 3.28224L12.6642 0.542241C12.3066 0.206336 11.838 0.0135995 11.3475 0.000692758C10.8571 -0.012214 10.379 0.15561 10.0042 0.472241L1.0042 9.47224C0.680969 9.79821 0.479707 10.2254 0.434203 10.6822L0.00420295 14.8522C-0.00926809 14.9987 0.00973728 15.1463 0.0598642 15.2846C0.109991 15.4229 0.190005 15.5484 0.294203 15.6522C0.387643 15.7449 0.498459 15.8182 0.620297 15.868C0.742134 15.9178 0.872596 15.943 1.0042 15.9422H1.0942L5.2642 15.5622C5.721 15.5167 6.14824 15.3155 6.4742 14.9922L15.4742 5.99224C15.8235 5.62321 16.0123 5.13075 15.9992 4.62278C15.9861 4.1148 15.7721 3.63275 15.4042 3.28224ZM12.0042 6.62224L9.3242 3.94224L11.2742 1.94224L14.0042 4.67224L12.0042 6.62224Z" fill="#FBF8F8"/>
                </svg>
                    <label className='lab' style={{fontSize:'15px'}} >{names}</label>
                    <div className='circle' onClick={modaltoggle} > 
                    
                    <img className='svgs' width={57} height={57} src={image} alt="images" />
                </div>
                </div>
            </div>
        </div>
        <Modal
        isOpen={openmodal}
        onRequestClose={modaltoggle}
        className='modal'
        >
        <Logout setOpenmodal={setOpenmodal} />
        </Modal>
  </div>
  )
}

export default Head
