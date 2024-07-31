import React, { useState } from 'react';
// import Usercontexts from './Usercontexts';

const Form = ({ first,last,schedule,option ,setModal,index}) => {
    const [firstname,setFirstname]=useState('');
    const [lastname,setLastname]=useState('');
    const [image,setImage]=useState('');
  const [dates, setDates] = useState('');
  const [optionupdate, setOption] = useState('Avaliable');

    // const [id,setID]=useState('');
    // const message=useContexts(Usercontexts);
    // const useID=(ids)=>{
    //   setID(ids);
    // }
    function handleChange(e) {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setImage(event.target.result);
        };
        reader.readAsDataURL(selectedFile);
      }
    }
    const Cancel = () => {
      setModal(false);
    };
 const handleSubmitt=()=>{

  

    const storedRegisters = JSON.parse(localStorage.getItem('doctorData')) || [];
    for (const value of storedRegisters) {
      if(first===value.first && last===value.last  && schedule === value.schedule && option ===value.option){
      if(firstname!=='')
        {value.first=firstname;}
      if(lastname!=='')
        {value.last=lastname;}
      if(dates!=='')
        {value.schedule=dates;}
      if(optionupdate!=='')
        {value.option=optionupdate;}
      if(image)
        {value.file=image;}

      if(firstname!=='' || lastname!==''){
        const storedRegister = JSON.parse(localStorage.getItem('Doctorss')) || [];
        for (const values of storedRegister){
            if(values.id===value.id){
              if(firstname!=='')
        {values.first=firstname;}
        if(lastname!=='')
        {values.last=lastname;}

            }
        }
        localStorage.setItem('Doctorss', JSON.stringify(storedRegister));
      }
  }
    }
    localStorage.setItem('doctorData', JSON.stringify(storedRegisters));
}
  return (
    // <div>
    //   <center>
    //     {/* <h1>{name}</h1> */}
    //     <h2>Update Appointment</h2>
    //   </center>
    //   <form className='form-modal' >
    //     <label>Appointment Date</label>
    //     <br />
    //     <div>
    //       <input
    //         type='text'
    //         value={dates}
    //         className='input-date'
    //         onChange={(e) => setDates(e.target.value)}
    //       />
    //       <br />
    //     </div>
    //     <label>First Name</label>
    //     <br/>
    //     <div className='input-time' >
    //         <input 
    //         type='text'
    //          value={firstname}
    //         onChange={(e) => setFirstname(e.target.value)}/>
    //     </div>
    //     <br/>
    //     <label>last Name</label>
    //     <br/>
    //     <div className='input-time' >
    //         <input 
    //         type='text'
    //          value={lastname}
    //         onChange={(e) => setLastname(e.target.value)}/>
    //     </div>
    //     <div>
    //         <label>Add image</label><br/>
    //         <input type="file"  onChange={handleChange} /><br/><br/>
    //       </div>
    //     <label>What's the issue?</label>
    //     <br />
        
    //     <div className='input-texts'>
    //       <select onChange={(e)=>{setOption(e.target.value)}} >
    //         <option>Select Option</option>
    //         <option value="Available" >Avaliable</option>
    //         <option value="Not Avaliable">Not Avaliable</option>
    //       </select>
    //     </div>
    //     <div className='svg-row-modal'>
    //       <button className='btn-1-modal' onClick={() => setModal(false)}>
    //         Cancel
    //       </button>
    //       <button className='btn-2-modal' onClick={()=>{handleSubmitt();;}} type='submit'>
    //         Book Now
    //       </button>
    //     </div>
    //   </form>
    // </div>
    <div>
      <h3 className='admin-side-Appointment-form-heading'>Update Doctor Info</h3>
      <form>
        <div className='admin-side-Appointment-form-row'>
          <div className='admin-side-Appointment-form-row-boder'>
            <input
              type='text'
              placeholder='First Name'
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
            />
          </div>
          <div className='admin-side-Appointment-form-row-boder margin-left'>
            <input
              type='text'
              placeholder='Last Name'
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Add image</label><br/>
            <input type="file"  onChange={handleChange} /><br/><br/>
          </div>
          <label>Schedule</label>
          <br />
          <div className='admin-side-Appointment-form'>
            <input
              type='text'
              placeholder='Monday-Friday'
              onChange={(e) => {
                setDates(e.target.value);
              }}
            />
          </div>
          <label>Status</label>
          <br />
          <select onChange={(e) => setOption(e.target.value)}>
            <option value='Available'>Available</option>
            <option value='Not Available'>Not Available</option>
          </select>
        </div>
        <br />
        <div className='admin-side-Appointment-form-row'>
          <button className='admin-side-Appointment-form-cancel' onClick={Cancel}>
            Cancel
          </button>
          <button className='admin-side-Appointment-form-add-doctor' onClick={handleSubmitt}>
            Add Doctor
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
