import { useState,useEffect } from 'react';
import React  from 'react';
import Modal from 'react-modal';
import Form from './Form';
// import { v4 as uuidv4 } from 'uuid';
// import Context from '../../Registration/Component/Context';
// import Usercontext from './Usercontext';
const Doctor = () => {
  // const [name,setName]=useState('');
  const [first,setFirst]=useState('');
  const [last,setLast]=useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [index,setIndex]=useState('');
  const [doctor,setDoctor]=useState([]);
  useEffect(() => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem('doctorData')) || [];
    setDoctor(dataFromLocalStorage);
  }, []);



  const Doctor = (first,last,index) => {
    setFirst(first);
    setLast(last);
    setIndex(index);
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  // const doctor = [
  //   {
  //     id: uuidv4(),
  //     "name": "Ahmad",
  //     "time": "Monday-Saturday",
  //     "status": "Available",
  //     "image": "/Rectangle 8.png"
  //   },
  //   {
  //     id: uuidv4(),
  //     "name": "Gulzar",
  //     "time": "Monday-Saturday",
  //     "status": "Available",
  //     "image": "/Rectangle 9.png"
  //   },
  //   {
  //     id: uuidv4(),
  //     "name": "Usman",
  //     "time": "Monday-Saturday",
  //     "status": "Available",
  //     "image": "/Rectangle 8.png"
  //   },
  //   {
  //     id: uuidv4(),
  //     "name": "Zafar",
  //     "time": "Monday-Saturday",
  //     "status": "Available",
  //     "image": "/Rectangle 9.png"
  //   }
  // ];
  
  
  const filteredDoctors = doctor.filter((doc) =>
  `${doc.first} ${doc.last}`.toLowerCase().includes(searchQuery.toLowerCase())
);

  return (
    <div>
        <div className='search-bar' >
        &nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><g clip-path="url(#clip0_548_221)">
    <path d="M11.2028 9.85174C11.1006 9.74954 11.0866 9.57314 11.165 9.45134C11.781 8.50354 12.1422 7.37514 12.1422 6.16274C12.1422 2.81394 9.4178 0.0909424 6.0718 0.0909424C2.723 0.0909424 0 2.81394 0 6.16274C0 9.51014 2.723 12.2331 6.0718 12.2331C7.3752 12.2331 8.582 11.8145 9.5732 11.1117C9.6894 11.0277 9.8644 11.0389 9.9666 11.1397L12.1366 13.3097C12.1506 13.3237 12.166 13.3377 12.1814 13.3489C12.2066 13.3699 12.3116 13.4679 12.4124 13.5701L12.67 13.8263C12.7722 13.9271 12.9374 13.9271 13.0382 13.8263L13.923 12.9415C14.0252 12.8393 14.0252 12.6741 13.9244 12.5719L11.2028 9.85174ZM9.744 8.99074C9.5438 9.25114 9.3184 9.48914 9.0692 9.70054C8.26 10.3879 7.2142 10.8051 6.0718 10.8051C3.5112 10.8051 1.428 8.72194 1.428 6.16274C1.428 3.60354 3.5112 1.51894 6.0718 1.51894C8.631 1.51894 10.7142 3.60214 10.7142 6.16274C10.7142 7.22674 10.3488 8.20674 9.744 8.99074Z" fill="#CACCCF"/>
      </g>
  <defs>
    <clipPath id="clip0_548_221">
      <rect width="14" height="14" fill="white"/>
    </clipPath>
  </defs>
</svg><input type='text' className='search-box' placeholder='Search Doctors'
value={searchQuery}
onChange={(e) => setSearchQuery(e.target.value)}
/>
        </div>
    <div className='large-box'>
      {filteredDoctors.map((value, index) => (
        <React.Fragment key={index}>
          <div className='colour'>
            <div className='content-row'>
              <img src={value.file} alt='img' />
              <div className='content-column'>
                {/* <Usercontext.Provider value={value.name} > */}
                <h2>&nbsp;&nbsp;&nbsp;&nbsp;{value.first} {value.last}</h2>
                {/* name=value.first + value.last; */}
                {/* </Usercontext.Provider> */}
               <p> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.33333 2.91663C2.01117 2.91663 1.75 3.17779 1.75 3.49996V4.08329C1.75 4.40546 2.01117 4.66663 2.33333 4.66663H2.91667C3.23883 4.66663 3.5 4.40546 3.5 4.08329V3.49996C3.5 3.17779 3.23883 2.91663 2.91667 2.91663H2.33333ZM1.75 6.41663C1.75 6.09446 2.01117 5.83329 2.33333 5.83329H2.91667C3.23883 5.83329 3.5 6.09446 3.5 6.41663V6.99996C3.5 7.32213 3.23883 7.58329 2.91667 7.58329H2.33333C2.01117 7.58329 1.75 7.32213 1.75 6.99996V6.41663ZM1.75 10.5C1.75 10.1778 2.01117 9.91663 2.33333 9.91663H11.6667C11.9888 9.91663 12.25 10.1778 12.25 10.5C12.25 10.8221 11.9888 11.0833 11.6667 11.0833H2.33333C2.01117 11.0833 1.75 10.8221 1.75 10.5ZM4.66667 6.41663C4.66667 6.09446 4.92783 5.83329 5.25 5.83329H5.83333C6.1555 5.83329 6.41667 6.09446 6.41667 6.41663V6.99996C6.41667 7.32213 6.1555 7.58329 5.83333 7.58329H5.25C4.92783 7.58329 4.66667 7.32213 4.66667 6.99996V6.41663ZM5.25 2.91663C4.92783 2.91663 4.66667 3.17779 4.66667 3.49996V4.08329C4.66667 4.40546 4.92783 4.66663 5.25 4.66663H5.83333C6.1555 4.66663 6.41667 4.40546 6.41667 4.08329V3.49996C6.41667 3.17779 6.1555 2.91663 5.83333 2.91663H5.25ZM7.58333 6.41663C7.58333 6.09446 7.8445 5.83329 8.16667 5.83329H8.75C9.07217 5.83329 9.33333 6.09446 9.33333 6.41663V6.99996C9.33333 7.32213 9.07217 7.58329 8.75 7.58329H8.16667C7.8445 7.58329 7.58333 7.32213 7.58333 6.99996V6.41663ZM8.16667 2.91663C7.8445 2.91663 7.58333 3.17779 7.58333 3.49996V4.08329C7.58333 4.40546 7.8445 4.66663 8.16667 4.66663H8.75C9.07217 4.66663 9.33333 4.40546 9.33333 4.08329V3.49996C9.33333 3.17779 9.07217 2.91663 8.75 2.91663H8.16667ZM10.5 6.41663C10.5 6.09446 10.7612 5.83329 11.0833 5.83329H11.6667C11.9888 5.83329 12.25 6.09446 12.25 6.41663V6.99996C12.25 7.32213 11.9888 7.58329 11.6667 7.58329H11.0833C10.7612 7.58329 10.5 7.32213 10.5 6.99996V6.41663ZM11.0833 2.91663C10.7612 2.91663 10.5 3.17779 10.5 3.49996V4.08329C10.5 4.40546 10.7612 4.66663 11.0833 4.66663H11.6667C11.9888 4.66663 12.25 4.40546 12.25 4.08329V3.49996C12.25 3.17779 11.9888 2.91663 11.6667 2.91663H11.0833Z" fill="#7C7B7B"/>
                        </svg>&nbsp;{value.schedule}</p>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                <circle cx="4.5" cy="4.5" r="4.5" fill="#53B781"/>
            </svg>&nbsp;&nbsp;{value.option}</p>
                <button  className='booking-btn' onClick={()=>{toggleModal();Doctor(value.first,value.last,value.id);}} ><div className='svg-row' ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.98711 10.9485C3.40636 10.9485 2.93557 11.4192 2.93557 12C2.93557 12.5808 3.40636 13.0515 3.98711 13.0515L11.3479 13.0515L11.3479 20.4124C11.3479 20.9931 11.8187 21.4639 12.3995 21.4639C12.9802 21.4639 13.451 20.9931 13.451 20.4124L13.451 13.0515H20.8119C21.3926 13.0515 21.8634 12.5808 21.8634 12C21.8634 11.4192 21.3926 10.9485 20.8119 10.9485H13.451L13.451 3.58762C13.451 3.00687 12.9802 2.53607 12.3995 2.53607C11.8187 2.53607 11.3479 3.00687 11.3479 3.58762L11.3479 10.9485L3.98711 10.9485Z" fill="white"/>
</svg><h3 className='p-2' >Booking Appointment</h3></div></button>
              </div>
            </div>
          </div>
          {index % 2 !== 0 && <div className='clear'></div>}
        </React.Fragment>
      ))}
    </div>
    <div>
      <Modal
       isOpen={modalIsOpen}
       onRequestClose={toggleModal}
       contentLabel="Example Modal"
       className='modal'
      >
      <Form setModalIsOpen={setModalIsOpen} first={first} last={last} index={index}/>
      </Modal>
    </div>
    
    </div>
  );
};

export default Doctor;
