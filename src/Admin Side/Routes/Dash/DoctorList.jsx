import React, { useState,useEffect } from 'react';
import Modal from 'react-modal';
import './DoctorList.css';
import Form from './Form';

const DoctorList = () => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [schedule, setSchedule] = useState('');
  const [option, setOption] = useState('');
  const [modal, setModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState({
    first: '',
    last: '',
    schedule: '',
    option: '',
  });
  const [storedRegisters, setStoredRegisters] = useState([]);
  const [index,setIndex]=useState('');
  useEffect(() => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem('doctorData')) || [];
    setStoredRegisters(dataFromLocalStorage);
  }, []);

  const update = (first, last, schedule, option,index) => {
    setFirst(first);
    setLast(last);
    setSchedule(schedule);
    setOption(option);
    setIndex(index);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const openModal = (doctor) => {
    setSelectedDoctor(doctor);
    toggleModal();
  };
  


  return (
    <div className='large-box'>
      {/* ... other content ... */}
      {storedRegisters.map((value, index) => (
        <React.Fragment key={index}>
          <div className='colours-admin'>
          <div className='content-row'>
              <img
                className='img-admin-side-doctor'
                width='210'
                height='253'
                src={value.file}
                alt='img'
              />
              <div className='content-column'>
                <h2>&nbsp;&nbsp;&nbsp;&nbsp;{value.first} {value.last}</h2>
                <p>
                  <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.33333 2.91675C2.01117 2.91675 1.75 3.17792 1.75 3.50008V4.08341C1.75 4.40558 2.01117 4.66675 2.33333 4.66675H2.91667C3.23883 4.66675 3.5 4.40558 3.5 4.08341V3.50008C3.5 3.17792 3.23883 2.91675 2.91667 2.91675H2.33333ZM1.75 6.41675C1.75 6.09458 2.01117 5.83342 2.33333 5.83342H2.91667C3.23883 5.83342 3.5 6.09458 3.5 6.41675V7.00008C3.5 7.32225 3.23883 7.58342 2.91667 7.58342H2.33333C2.01117 7.58342 1.75 7.32225 1.75 7.00008V6.41675ZM1.75 10.5001C1.75 10.1779 2.01117 9.91675 2.33333 9.91675H11.6667C11.9888 9.91675 12.25 10.1779 12.25 10.5001C12.25 10.8222 11.9888 11.0834 11.6667 11.0834H2.33333C2.01117 11.0834 1.75 10.8222 1.75 10.5001ZM4.66667 6.41675C4.66667 6.09458 4.92783 5.83342 5.25 5.83342H5.83333C6.1555 5.83342 6.41667 6.09458 6.41667 6.41675V7.00008C6.41667 7.32225 6.1555 7.58342 5.83333 7.58342H5.25C4.92783 7.58342 4.66667 7.32225 4.66667 7.00008V6.41675ZM5.25 2.91675C4.92783 2.91675 4.66667 3.17792 4.66667 3.50008V4.08341C4.66667 4.40558 4.92783 4.66675 5.25 4.66675H5.83333C6.1555 4.66675 6.41667 4.40558 6.41667 4.08341V3.50008C6.41667 3.17792 6.1555 2.91675 5.83333 2.91675H5.25ZM7.58333 6.41675C7.58333 6.09458 7.8445 5.83342 8.16667 5.83342H8.75C9.07217 5.83342 9.33333 6.09458 9.33333 6.41675V7.00008C9.33333 7.32225 9.07217 7.58342 8.75 7.58342H8.16667C7.8445 7.58342 7.58333 7.32225 7.58333 7.00008V6.41675ZM8.16667 2.91675C7.8445 2.91675 7.58333 3.17792 7.58333 3.50008V4.08341C7.58333 4.40558 7.8445 4.66675 8.16667 4.66675H8.75C9.07217 4.66675 9.33333 4.40558 9.33333 4.08341V3.50008C9.33333 3.17792 9.07217 2.91675 8.75 2.91675H8.16667ZM10.5 6.41675C10.5 6.09458 10.7612 5.83342 11.0833 5.83342H11.6667C11.9888 5.83342 12.25 6.09458 12.25 6.41675V7.00008C12.25 7.32225 11.9888 7.58342 11.6667 7.58342H11.0833C10.7612 7.58342 10.5 7.32225 10.5 7.00008V6.41675ZM11.0833 2.91675C10.7612 2.91675 10.5 3.17792 10.5 3.50008V4.08341C10.5 4.40558 10.7612 4.66675 11.0833 4.66675H11.6667C11.9888 4.66675 12.25 4.40558 12.25 4.08341V3.50008C12.25 3.17792 11.9888 2.91675 11.6667 2.91675H11.0833Z" fill="#7C7B7B"/>
</svg>
                  </svg>
                  &nbsp;{value.schedule}
                </p>
                <p>
                  <svg xmlns='http://www.w3.org/2000/svg' width='9' height='9' viewBox='0 0 9 9' fill='none'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
  <circle cx="4.5" cy="4.5" r="4.5" fill="#53B781"/>
</svg>
                  </svg>
                  &nbsp;&nbsp;{value.option}
                </p>
                <button
                  onClick={() => {
                    openModal(value);
                    update(value.first, value.last, value.schedule, value.option,value.id);
                  }}
                  className='booking-btn'
                >
                  <div className='svg-row'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='25' height='24' viewBox='0 0 25 24' fill='none'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 2C5.39543 2 4.5 2.89543 4.5 4V20C4.5 21.1046 5.39543 22 6.5 22H18.5C19.6046 22 20.5 21.1046 20.5 20V4C20.5 2.89543 19.6046 2 18.5 2H6.5ZM6.5 4L18.5 4V20H6.5V4ZM9.5 7C8.94772 7 8.5 7.44772 8.5 8C8.5 8.55228 8.94772 9 9.5 9H11.5C12.0523 9 12.5 8.55228 12.5 8C12.5 7.44772 12.0523 7 11.5 7H9.5ZM8.5 12C8.5 11.4477 8.94772 11 9.5 11H13.5C14.0523 11 14.5 11.4477 14.5 12C14.5 12.5523 14.0523 13 13.5 13H9.5C8.94772 13 8.5 12.5523 8.5 12ZM9.5 15C8.94772 15 8.5 15.4477 8.5 16C8.5 16.5523 8.94772 17 9.5 17H15.5C16.0523 17 16.5 16.5523 16.5 16C16.5 15.4477 16.0523 15 15.5 15H9.5Z" fill="white"/>
</svg>
                    </svg>
                    <h3 className='p-2'>Update Doctor Info</h3>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
      <Modal
        isOpen={modal}
        onRequestClose={toggleModal}
        contentLabel='Example Modal'
        className='modal'
      >
        <Form
          setModalIsOpen={setModal}
          initialDoctor={selectedDoctor}
          first={first}
          last={last}
          schedule={schedule}
          option={option}
          index={index}
        />
      </Modal>
    </div>
  );
};

export default DoctorList;
