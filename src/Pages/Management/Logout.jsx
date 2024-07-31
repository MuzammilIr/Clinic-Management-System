import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setOpenmodal }) => {
  const navigate = useNavigate();

  const Cancel = () => {
    setOpenmodal(false);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    navigate('/login');
  };

  return (

    <div className='svg-btn-logout-row'>
          <center>
              <button className="logout" onClick={logout}>
                  Logout
              </button>
              <button className="logout" onClick={Cancel}>
                  Cancel
              </button>
          </center>
      </div>
  );
};

export default Logout;
