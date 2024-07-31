import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Registration from './Pages/Registration/Register';
import Login from './Pages/Login/Login';
// import Manage from './Pages/Management/Manage';
import Doctor from './Pages/Management/Component/Doctor';
import Appointement from './Pages/Management/Component/Appointement';
import Dashboard from './Admin Side/Dashboard/Dashboard';
// import Appointment from './Admin Side/Appointment/Appointment';
import Appoint from './Admin Side/Routes/Appoint/Appoint';
import Dash from './Admin Side/Routes/Dash/Dash';
import Doctors from './Admin Side/Routes/Doctors/Doctors';
import UserContext from './UserContext';
import Privateroute from './Pages/Login/Component/Privateroute';
import Protectedroutes from './Admin Side/Dashboard/Component/Protectedroutes';

const App = () => {
  const log=true;
  const storedToken = localStorage.getItem('accessToken'); // Get the token from local storage
  const logedin=!!storedToken;
  // const handleReload = () => {
  //   window.location.reload();
  // };
  return (
    <div>
      <UserContext.Provider value="/manage">
        <Routes>
          {/* {storedToken}&&{
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Registration />} />} */}
         {!logedin ? (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Registration />} />
            </>
          ) : 
          <><Route path="/login" element={<Privateroute />} />
          <Route path="/" element={<Privateroute />} /></>
          }

          <Route path="/manage" element={<><Privateroute  /></>}>
            <Route path="/manage/" element={<><br /><Doctor /></>} />
            <Route path="Appointment" element={<><br /><Appointement /></>} />
          </Route>

          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Appointment" element={<Protectedroutes condition={log}></Protectedroutes>}>
            <Route path="/Appointment/" element={<Dash />} />
            <Route path="Appoint" element={<Appoint />} />
            <Route path="Doctors" element={<Doctors />} />
          </Route>

          <Route path="*" element={
            <div>
              <h1>No Page Found</h1>
            </div>
          } />
        </Routes>
      </UserContext.Provider>
    </div>
  );
};

export default App;
