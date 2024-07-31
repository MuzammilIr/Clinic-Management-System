import React from 'react';
import { useState,useEffect } from 'react';
import Modal from 'react-modal';
import Secondform from './Secondform';
import { v4 as uuidv4 } from 'uuid'; 
const Appointement = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [first,setFirst]=useState('');
  const [last,setLast]=useState('');
  const [description,setDescription]=useState('');
  const [times,setTimes]=useState('');
  const [index,setIndex]=useState('');
  const [storedRegisters, setStoredRegisters] = useState([]);
  

  useEffect(() => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem('Doctorss')) || [];
    setStoredRegisters(dataFromLocalStorage);
  }, []);
  
  const doctor = (first,last,description,times,index) => {
    setFirst(first);
    setLast(last);
    setDescription(description);
    setTimes(times);
    setIndex(index);
  };
  // const Cancelappointment = (indexToDelete) => {
  //   const storedRegisters = JSON.parse(localStorage.getItem('Doctorss')) || [];
  //   const newarray = storedRegisters.filter((value) => value.id !== indexToDelete);
  //   localStorage.setItem('Doctorss', JSON.stringify(newarray));
  // };
  const Cancelappointment = (indexToDelete) => {
    const newarray = storedRegisters.filter((value) => value.id !== indexToDelete);
    setStoredRegisters(newarray);
    localStorage.setItem('Doctorss', JSON.stringify(newarray));
  };
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  
  return (
    <div className='svg-rw' >
      {storedRegisters.map((value) => (
        <React.Fragment key={uuidv4()}>
            <div className='content-column-2' >
                <h1>{value.first} {value.last}</h1>
                <p style={{color:'blue'}} ><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.33333 2.91675C2.01117 2.91675 1.75 3.17792 1.75 3.50008V4.08341C1.75 4.40558 2.01117 4.66675 2.33333 4.66675H2.91667C3.23883 4.66675 3.5 4.40558 3.5 4.08341V3.50008C3.5 3.17792 3.23883 2.91675 2.91667 2.91675H2.33333ZM1.75 6.41675C1.75 6.09458 2.01117 5.83342 2.33333 5.83342H2.91667C3.23883 5.83342 3.5 6.09458 3.5 6.41675V7.00008C3.5 7.32225 3.23883 7.58342 2.91667 7.58342H2.33333C2.01117 7.58342 1.75 7.32225 1.75 7.00008V6.41675ZM1.75 10.5001C1.75 10.1779 2.01117 9.91675 2.33333 9.91675H11.6667C11.9888 9.91675 12.25 10.1779 12.25 10.5001C12.25 10.8222 11.9888 11.0834 11.6667 11.0834H2.33333C2.01117 11.0834 1.75 10.8222 1.75 10.5001ZM4.66667 6.41675C4.66667 6.09458 4.92783 5.83342 5.25 5.83342H5.83333C6.1555 5.83342 6.41667 6.09458 6.41667 6.41675V7.00008C6.41667 7.32225 6.1555 7.58342 5.83333 7.58342H5.25C4.92783 7.58342 4.66667 7.32225 4.66667 7.00008V6.41675ZM5.25 2.91675C4.92783 2.91675 4.66667 3.17792 4.66667 3.50008V4.08341C4.66667 4.40558 4.92783 4.66675 5.25 4.66675H5.83333C6.1555 4.66675 6.41667 4.40558 6.41667 4.08341V3.50008C6.41667 3.17792 6.1555 2.91675 5.83333 2.91675H5.25ZM7.58333 6.41675C7.58333 6.09458 7.8445 5.83342 8.16667 5.83342H8.75C9.07217 5.83342 9.33333 6.09458 9.33333 6.41675V7.00008C9.33333 7.32225 9.07217 7.58342 8.75 7.58342H8.16667C7.8445 7.58342 7.58333 7.32225 7.58333 7.00008V6.41675ZM8.16667 2.91675C7.8445 2.91675 7.58333 3.17792 7.58333 3.50008V4.08341C7.58333 4.40558 7.8445 4.66675 8.16667 4.66675H8.75C9.07217 4.66675 9.33333 4.40558 9.33333 4.08341V3.50008C9.33333 3.17792 9.07217 2.91675 8.75 2.91675H8.16667ZM10.5 6.41675C10.5 6.09458 10.7612 5.83342 11.0833 5.83342H11.6667C11.9888 5.83342 12.25 6.09458 12.25 6.41675V7.00008C12.25 7.32225 11.9888 7.58342 11.6667 7.58342H11.0833C10.7612 7.58342 10.5 7.32225 10.5 7.00008V6.41675ZM11.0833 2.91675C10.7612 2.91675 10.5 3.17792 10.5 3.50008V4.08341C10.5 4.40558 10.7612 4.66675 11.0833 4.66675H11.6667C11.9888 4.66675 12.25 4.40558 12.25 4.08341V3.50008C12.25 3.17792 11.9888 2.91675 11.6667 2.91675H11.0833Z" fill="#7C7B7B"/>
</svg><label style={{color:'#9D9CB5'}} >Appointment On &nbsp;</label>{value.date}</p>
                <p style={{color:'#9D9CB5'}} ><svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
  <path d="M0 1H12M0 7.58064H6.46154M0 13H2.76923" stroke="#535461"/>
</svg>{value.text}</p>
<div className='svg-row-button' >
<button className='btn-1' onClick={()=>{Cancelappointment(value.id);}} >Cancel Appointment</button>
<button className='btn-2' onClick={() => { toggleModal(); doctor(value.first,value.last,value.text,value.date,value.id); }} ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19.4001 7.3401L16.6601 4.6001C16.3024 4.2642 15.8338 4.07146 15.3434 4.05855C14.8529 4.04565 14.3748 4.21347 14.0001 4.5301L5.00005 13.5301C4.67682 13.8561 4.47556 14.2833 4.43005 14.7401L4.00005 18.9101C3.98658 19.0566 4.00559 19.2042 4.05571 19.3425C4.10584 19.4808 4.18585 19.6063 4.29005 19.7101C4.38349 19.8028 4.49431 19.8761 4.61615 19.9259C4.73798 19.9756 4.86845 20.0009 5.00005 20.0001H5.09005L9.26005 19.6201C9.71685 19.5746 10.1441 19.3733 10.4701 19.0501L19.4701 10.0501C19.8194 9.68107 20.0082 9.18861 19.995 8.68064C19.9819 8.17266 19.768 7.69061 19.4001 7.3401ZM16.0001 10.6801L13.3201 8.0001L15.2701 6.0001L18.0001 8.7301L16.0001 10.6801Z" fill="white"/>
</svg>Edit Appointment</button>
</div  >

            </div>
            &nbsp;&nbsp;
        </React.Fragment>
      ))}
      <Modal
       isOpen={modalIsOpen}
       onRequestClose={toggleModal}
       contentLabel="Example Modal"
       className='modal'
      >
      <Secondform setModalIsOpen={setModalIsOpen} first={first} last={last} description={description} times={times} index={index}/>
      </Modal>
    </div>
  )
}

export default Appointement
