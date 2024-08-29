import React, { useState } from 'react';
import './main.css'; 
import image1 from '../image/img1.jpg'

import { PiStudentBold } from "react-icons/pi";
import { FaMoneyBillTransfer } from "react-icons/fa6";



const Main = () => {

  const [regularStudents, setRegularStudents] = useState(8);
  const [remedialStudents, setRemedialStudents] = useState(13);
  const [inPaidClubs, setInPaidClubs] = useState(0);

  return (
    <div className="dashboard">
      
      <div className="sidebar">
        <div className="sidebar-logo">
          {/* <img src="structure/src/Components/image/img1.jpg" alt="Logo" /> */}
        </div>
        <div className="sidebar-item"><PiStudentBold  className='icon' /> <br/> Student Management</div>
        <div className="sidebar-item"><PiStudentBold  className='icon' /> <br/>Financial Management</div>
        <div className="sidebar-item"><PiStudentBold  className='icon' /> <br/>Quality Control</div>
        <div className="sidebar-item"><PiStudentBold  className='icon' /> <br/>Report Delivery</div>
        <div className="sidebar-item"><PiStudentBold  className='icon' /> <br/>Attendance</div>
        <div className="sidebar-footer">
          <div className="sidebar-item">Settings</div>
          <div className="sidebar-item">Help</div>
        </div>
      </div>

 
      <div className="main-content">
        <h2>Student Management</h2>

       
        <div className="student-cards">
          <div className="card red">
            <div className="card-icon">
              <i className="fas fa-user"></i>
            </div>
            <div className="card-details">
              <span>{regularStudents}</span>
              <p>Regular Students</p>
            </div>
          </div>
          <div className="card purple">
            <div className="card-icon">
              <i className="fas fa-user-graduate"></i>
            </div>
            <div className="card-details">
              <span>{remedialStudents}</span>
              <p>Remedial Students</p>
            </div>
          </div>
          <div className="card green">
            <div className="card-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="card-details">
              <span>{inPaidClubs}</span>
              <p>In Paid Clubs</p>
            </div>
          </div>
        </div>

        
        <div className="menu">
          <div className="menu-item">
            <i className="fas fa-user-plus"></i>
            <p>Regular Enrollment</p>
          </div>
          <div className="menu-item">
            <i className="fas fa-book"></i>
            <p>Remedial Enrollment</p>
          </div>
          <div className="menu-item">
            <i className="fas fa-club"></i>
            <p>Club Management</p>
          </div>
          <div className="menu-item">
            <i className="fas fa-chalkboard-teacher"></i>
            <p>Classroom Management</p>
          </div>
          <div className="menu-item">
            <i className="fas fa-envelope"></i>
            <p>SMS / EMAIL</p>
          </div>
          <div className="menu-item">
            <i className="fas fa-chart-bar"></i>
            <p>Attendance</p>
          </div>
          <div className="menu-item">
            <i className="fas fa-clinic-medical"></i>
            <p>Clinic</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
