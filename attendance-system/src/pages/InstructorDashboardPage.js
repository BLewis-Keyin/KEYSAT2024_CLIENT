import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/auth";
import { IoHomeOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaPlusMinus } from "react-icons/fa6";
const username = localStorage.getItem("username");

function InstructorDashboardPage() {
  const auth = useAuth();
  console.log(auth.user);
  return (
    <div>
      <Header></Header>
        <div className="admin-dashboard-container">
 
     
            <Navbar>
              <Link to="/admin-dashboard" className="nav-link">
              <span style={{ display: 'flex', alignItems: 'center' }}>
               <IoHomeOutline style={{ marginRight: "5px" }} /> Admin Dashboard
               </span>
              </Link>
 
              <Link to="/courses" className="nav-link">
              <span style={{ display: 'flex', alignItems: 'center' }}>
              <IoNewspaperOutline style={{ marginRight: "5px" }} />Courses
              </span>
              </Link>
 
              <Link to="/admin-add-remove-users" className="nav-link">
              <span style={{ display: 'flex', alignItems: 'center' }}>
              <FaPlusMinus style={{ marginRight: "5px" }}/>Students and Instructors
              </span>
              </Link>
            </Navbar>
 
            <div className="admin-dash-main-content">
              <h1>Instructor Dashboard</h1>
              <p>Welcome, {username}!</p>
            </div>
 
        </div>
 
 
    </div>
  );
}

export default InstructorDashboardPage;
