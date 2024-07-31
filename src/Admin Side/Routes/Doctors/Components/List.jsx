import React, { useState,useEffect } from 'react';
import Modal from 'react-modal';
import { v4 as uuidv4 } from 'uuid';
import Secondform from './Secondform';
import '../Doctors.css';

const List = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [storedRegisters, setStoredRegisters] = useState([]);

  useEffect(() => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem('Doctorss')) || [];
    setStoredRegisters(dataFromLocalStorage);
  }, []);


  const toggleModal = (doctor) => {
    setSelectedDoctor(doctor);
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div>
      <table className="admin-side-table">
        <thead>
          <tr>
            <th className='h6'>Patient name</th>
            <th className='h5'>Date</th>
            <th className='h5'>Doctor</th>
            <th className='h5'>Description</th>
            <th className='h5'>Edit Patient</th>
          </tr>
        </thead>
        <tbody>
          {storedRegisters.map((value) => (
            <tr key={uuidv4()} style={{ paddingTop: '20px' }}>
              <td className='h6'>{value.patient}</td>
              <td className='h5'>{value.date}</td>
              <td className='h5'>{`${value.first} ${value.last}`}</td>
              <td className='h5'>{value.text}</td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className='h5'
                  onClick={() => toggleModal(value)}
                >
                 
  <path d="M15.4042 3.28224L12.6642 0.542241C12.3066 0.206336 11.838 0.0135995 11.3475 0.000692758C10.8571 -0.012214 10.379 0.15561 10.0042 0.472241L1.0042 9.47224C0.680969 9.79821 0.479707 10.2254 0.434203 10.6822L0.00420295 14.8522C-0.00926809 14.9987 0.00973728 15.1463 0.0598642 15.2846C0.109991 15.4229 0.190005 15.5484 0.294203 15.6522C0.387643 15.7449 0.498459 15.8182 0.620297 15.868C0.742134 15.9178 0.872596 15.943 1.0042 15.9422H1.0942L5.2642 15.5622C5.721 15.5167 6.14824 15.3155 6.4742 14.9922L15.4742 5.99224C15.8235 5.62321 16.0123 5.13075 15.9992 4.62278C15.9861 4.1148 15.7721 3.63275 15.4042 3.28224ZM12.0042 6.62224L9.3242 3.94224L11.2742 1.94224L14.0042 4.67224L12.0042 6.62224Z" fill="#3F3D56"/>

                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        contentLabel="Example Modal"
        className='modal'
      >
        {selectedDoctor && (
          <Secondform
            setModalIsOpen={setModalIsOpen}
            first={selectedDoctor.first}
            last={selectedDoctor.last}
            description={selectedDoctor.text}
            times={selectedDoctor.date}
            index={selectedDoctor.id}
          />
        )}
      </Modal>
    </div>
  );
}

export default List;
