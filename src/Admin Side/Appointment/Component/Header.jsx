import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import Form from './Form';
import '../Appointment.css'
const Header = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen);
      };
  return (
    <><div className='admin-side-Appointment'>
          <img style={{ width: '30px', height: '35px' }} src='/doctor.png' alt='logo' />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <h3>Clinic Management System</h3>
          <button 
          className='admin-side-Appointment-button'
          onClick={toggleModal}
          >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.98711 10.9485C3.40636 10.9485 2.93557 11.4192 2.93557 12C2.93557 12.5808 3.40636 13.0515 3.98711 13.0515L11.3479 13.0515L11.3479 20.4124C11.3479 20.9931 11.8187 21.4639 12.3995 21.4639C12.9802 21.4639 13.451 20.9931 13.451 20.4124L13.451 13.0515H20.8119C21.3926 13.0515 21.8634 12.5808 21.8634 12C21.8634 11.4192 21.3926 10.9485 20.8119 10.9485H13.451L13.451 3.58762C13.451 3.00687 12.9802 2.53607 12.3995 2.53607C11.8187 2.53607 11.3479 3.00687 11.3479 3.58762L11.3479 10.9485L3.98711 10.9485Z" fill="white" />
              </svg>
              <b style={{color:'white'}}>Add New Doctor</b>
          </button>
      </div><Modal
          isOpen={modalIsOpen}
          onRequestClose={toggleModal}
          contentLabel="Example Modal"
          className='modal'
      >
              <Form setModalIsOpen={setModalIsOpen}  />
          </Modal></>
  )
}

export default Header
