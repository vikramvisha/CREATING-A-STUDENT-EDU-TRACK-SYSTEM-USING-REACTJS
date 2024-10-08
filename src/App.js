import React, { useState } from 'react';
import './App.css'; 
//import image1 from '../image/img1.jpg'
import { IoMdContact } from "react-icons/io";
import { PiStudentBold } from "react-icons/pi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa";import { CiSettings } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { IoDocument } from "react-icons/io5";
import { IoManSharp } from "react-icons/io5";


const App = () => {

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
          <div className="sidebar-item"><CiSettings  className='icon'/></div>
          <div className="sidebar-item"><IoMdHelpCircleOutline className='icon' /></div>
        </div>
      </div>

 
      <div className="main-content">
        <h1 className='header'>Student Management</h1>

       
        <div className="student-cards">
          <div className="card red">
            <div className="card-icon">
              <i className="fas fa-user"></i>
            </div>
            <div className="card-details">
            <div className='icon2'>
              <span><IoMdContact /></span>
              </div>
              <p>Regular Students</p>
              <span>{regularStudents}</span>
            </div>
          </div>
          <div className="card purple">
            <div className="card-icon">
              <i className="fas fa-user-graduate"></i>
            </div>
            <div className="card-details">
            <div className='icon2'>
              <span><IoMdContact /></span>
              </div>
              <p>Remedial Students</p>
              <span>{remedialStudents}</span>
            </div>
          </div>
          <div className="card green">
            <div className="card-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="card-details">
              <div className='icon2'>
              <span><IoMdContact /></span>
              </div>
              <p>In Paid Clubs</p>
              <span>{inPaidClubs}</span>

            </div>
          </div>
        </div>

        
        <div className="menu">
          <div className="menu-item">
            <i className="fas fa-user-plus"><FaBookOpen /></i>
            <p>Regular Enrollment</p>
          </div>
          <div className="menu-item">
            <i className="fas fa-book"><FaBookOpen /></i>
            <p>Remedial Enrollment</p>
          </div>
          <div className="menu-item">
            <i className="fas fa-club"><IoManSharp /></i>
            <p>Club Management</p>
          </div>
          <div className="menu-item">
            <i className="fas fa-chalkboard-teacher"><FaBookOpen /></i>
            <p>Classroom Management</p>
          </div>
          <div className="menu-item">
            <i className="fas fa-envelope"><MdEmail/></i>
            <p>SMS / EMAIL</p>
          </div>
          <div className="menu-item">
            <i className="fas fa-chart-bar"><IoDocument /></i>
            <p>Attendance</p>
          </div>
          <div className="menu-item">
            <i className="fas fa-clinic-medical"><IoManSharp /></i>
            <p>Clinic</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
