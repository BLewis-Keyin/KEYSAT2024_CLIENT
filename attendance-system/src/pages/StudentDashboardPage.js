import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { BsPencilSquare } from 'react-icons/bs';
import { useAuth } from '../auth/auth';
const username = localStorage.getItem("username");

function StudentDashboardPage() {
  const auth = useAuth();

  return (
    <>
      <div className='container'>
        <Header></Header>
        <Navbar>
        <Link to='/student-dashboard' className='nav-link'>
  <span>
    <BsPencilSquare style={{ marginRight: '5px' }} /> Attendance
  </span>
</Link>

        </Navbar>
        <div className='main-content'>
          <h2>Student Dashboard</h2>
          <p>Welcome, {username}!</p>
        </div>
      </div>
    </>
  );
}

export default StudentDashboardPage;
