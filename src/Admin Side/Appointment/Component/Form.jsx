import React, { useState, useEffect } from 'react';
import '../Appointment.css';
import { v4 as uuidv4 } from 'uuid';


const Form = ({ setModalIsOpen }) => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [schedule, setSchedule] = useState('');
  const [option, setOption] = useState('Available'); 
  const [data, setData] = useState([]);
  const [file, setFile] = useState();
  function handleChange(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFile(event.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  }


  useEffect(() => {
    const savedRegistration = JSON.parse(localStorage.getItem('doctorData'));
    if (savedRegistration) {
      setData(savedRegistration);
    }
  }, []);

  const Cancel = () => {
    setModalIsOpen(false);
  };

  const HandleSubmit = () => {
    if(first===''){
      alert('Enter First name');return;
    }
    if(schedule===''){
      alert('Enter Week name');return;
    }
   if(!file){
    alert('upload image');return;
   }
    const set = {
      id: uuidv4(),
      first,
      last,
      schedule,
      option,
      file,
    };
    setData([...data, set]);
    localStorage.setItem('doctorData', JSON.stringify([...data, set]));
    localStorage.setItem('doctorImage', file);

  };

  return (
    <div>
      <h3 className='admin-side-Appointment-form-heading'>Add New Doctor</h3>
      <form>
        <div className='admin-side-Appointment-form-row'>
          <div className='admin-side-Appointment-form-row-boder'>
            <input
              type='text'
              placeholder='First Name'
              onChange={(e) => {
                setFirst(e.target.value);
              }}
            />
          </div>
          <div className='admin-side-Appointment-form-row-boder margin-left'>
            <input
              type='text'
              placeholder='Last Name'
              onChange={(e) => {
                setLast(e.target.value);
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
                setSchedule(e.target.value);
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
          <button className='admin-side-Appointment-form-add-doctor' onClick={HandleSubmit}>
            Add Doctor
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
