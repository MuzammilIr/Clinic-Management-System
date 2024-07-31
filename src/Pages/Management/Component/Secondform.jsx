import React, { useState } from 'react';
// import Usercontexts from './Usercontexts';

const Secondform = ({ setModalIsOpen,first,last,description,times }) => {
  const [dates, setDates] = useState('');
  const [texts, setTexts] = useState('');
    const[time,setTime]=useState('');
    // const [id,setID]=useState('');
    // const message=useContexts(Usercontexts);
    // const useID=(ids)=>{
    //   setID(ids);
    // }
 const handleSubmitt=()=>{
  // if(dates===''){
  //   alert('Please Select Date');
  //   return;
  // }
  // if (texts===''){
  //   alert('Please Enter Texts');
  //   return;
  // }
  

    const storedRegisters = JSON.parse(localStorage.getItem('Doctorss')) || [];
    for (const value of storedRegisters) {
      if(first===value.first && last===value.last && description===value.text && times === value.date){
      if(dates!=='')
        {value.date = dates;} 
      if(texts!=='')
        {value.text = texts; }
    }
    }
    localStorage.setItem('Doctorss', JSON.stringify(storedRegisters));
}
  return (
    <div>
      <center>
        {/* <h1>{name}</h1> */}
        <h2>Edit Appointment</h2>
      </center>
      <form className='form-modal' >
        <label>Appointment Date</label>
        <br />
        <div>
          <input
            type='date'
            value={dates}
            className='input-date'
            onChange={(e) => setDates(e.target.value)}
          />
          <br />
        </div>
        <label>Appointment Time</label>
        <br/><br/>
        <div className='input-time' >
            <input 
            type='time'
             value={time}
            onChange={(e) => setTime(e.target.value)}/>
        </div>
        <br/>
        <label>What's the issue?</label>
        <br />
        
        <div className='input-texts'>
          <input
            type='texts'
            value={texts}
            placeholder='Description will be here'
            onChange={(e) => setTexts(e.target.value)}
          />
        </div>
        <div className='svg-row-modal'>
          <button className='btn-1-modal' onClick={() => setModalIsOpen(false)}>
            Cancel
          </button>
          <button className='btn-2-modal' onClick={()=>{handleSubmitt();;}} type='submit'>
            Update Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Secondform;
