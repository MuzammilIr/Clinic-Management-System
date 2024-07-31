import { useState } from 'react';

// import Context from '../../Registration/Component/Context';
const Form = ({ setModalIsOpen,first,last,index }) => {
  // const message=useContext(Context);

  const [date, setDate] = useState('');
  const [text, setText] = useState('');

  const [patient,setPatient]=useState('');

 const handleSubmitt=()=>{
  if(patient===''){
    alert('Please write patient name');
    return;
  }
  if(date===''){
    alert('Please Select Date');
    return;
  }
  if (text===''){
    alert('Please Enter Text');
    return;
  }




const storedAppointments = JSON.parse(localStorage.getItem('Doctorss')) || [];

const newAppointment = { id: index, first , last, date,patient, text };

const updatedAppointments = [...storedAppointments, newAppointment];

localStorage.setItem('Doctorss', JSON.stringify(updatedAppointments));

setDate('');
setText('');
setPatient('');
 }
  return (
    <div>
      <center>
        <h2>Booking New Appointment</h2>
      </center>
      <form className='form-modal' >
        <label>Patient Name</label>
        <br/>
        <div>
        <input
            type='text'
            value={patient}
            className='input-date'
            onChange={(e) => setPatient(e.target.value)}
          />
        </div>
        <label>Appointment Date</label>
        <br/>
        <br />
        <div>
          <input
            type='date'
            value={date}
            className='input-date'
            onChange={(e) => setDate(e.target.value)}
          />
          <br />
        </div>
        <label>What's the issue?</label>
        <br />
        <div className='input-text'>
          <input
            type='text'
            value={text}
            placeholder='Description will be here'
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='svg-row-modal'>
          <button className='btn-1-modal' onClick={() => setModalIsOpen(false)}>
            Cancel
          </button>
          <button className='btn-2-modal' onClick={handleSubmitt} type='submit'>
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
