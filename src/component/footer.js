import React from 'react';
import { IoMdContact } from "react-icons/io";
import './App.css';
import { IoIosContacts } from "react-icons/io";
import './asset/logo.png';

const App = () => {
  return (
    <div className="app">
      <div className="sidebar">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <ul className="nav-menu">
          <li className='icon1'>Student Management</li>
          <li>Financial Management</li>
          <li>Quality Control</li>
          <li>Report Delivery</li>
          <li>Attendance</li>
        </ul>
      </div>
      <div className="main-content">
        <div className="student-management">
          <div className="summary">
            <div className="regular-students">
              <div className="summary-icon "><IoMdContact /></div>
              <span>Regular Students</span>
              <h2>8</h2>
            </div>
            <div className="remadical">
              <div className="remedical-icon"><IoMdContact /></div>
              <span>Remedial Students</span>
              <h2>13</h2>
            </div>
            <div className="paid-clubs">
              <div className="summary-icon "><IoMdContact /></div>
              <span>In Paid Clubs</span>
              <h2>00</h2>
            </div>
          </div>
          <div className="menu">
            <div className="menu-item">Regular Enrollment</div>
            <div className="menu-item">Remedial Enrollment</div>
            <div className="menu-item">Club Management</div>
            <div className="menu-item">Classroom Management</div>
            <div className="menu-item">SMS / EMAIL</div>
            <div className="menu-item">Attendance</div>
            <div className="menu-item">Clinic</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;



.app {
    display: flex;
    height: 100vh;
  }
  
  .sidebar {
    width: 20%;
    background-color: #2c3e50;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .logo img {
    width: 100px;
    margin: 20px 0;
  }
  
  .nav-menu {
    list-style: none;
    padding: 0;
    width: 100%;
  }
  
  .nav-menu li {
    padding: 15px;
    text-align: center;
    cursor: pointer;
    border-bottom: 1px solid #34495e;
  }
  
  .main-content {
    width: 80%;
    padding: 20px;
  }
  
  .student-management .summary {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .paid-clubs{
    background-color:lightgreen;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 30%;
  }
  .remadical{
    background-color:violet;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 30%;
  }
  .regular-students{background-color:red;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 30%;
  }
  .summary-icon {
    font-size: 4rem; 
    margin-bottom: 10px;
  }
  .remedical-icon{
    font-size: 4rem; 
    margin-bottom: 10px;
  }
  .menu {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
  .menu-item {
    background-color: #3498db;
    color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    margin-bottom: 20px;
    cursor: pointer;
    width: 30%;
  }
  