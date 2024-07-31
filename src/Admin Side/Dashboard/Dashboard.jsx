import React from 'react'
import Header from './Component/Header'
import Form from './Component/Form'
import './Dashboard.css'
const Dashboard = () => {
  return (
    <>
    <div className='Head-admin-side' >
      <Header />
    </div>
    <div className='Form-admin-side' >
        <Form/>
    </div>
    </>
  )
}

export default Dashboard
