import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import AddComplaint from "./components/AddComplaint";
import AllComplaints from "./components/AllComplaints";
import UpdateStatus from "./components/UpdateStatus";
import MyComplaints from "./components/MyComplaints";
import EditComplaint from "./components/EditComplaint";
import StudentDashboard from "./components/StudentDashboard";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <div>
              <br />
              <h1>Campus Complaint Management System</h1>

              <p>Report and Track Campus Complaints Easily</p>
              <br />

              <Link to="/login">
                <button>Login</button>
              </Link>

              <Link to="/register">
                <button>Register</button>
              </Link>
            </div>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<AddComplaint  />} />
        <Route path="/addcomplaint" element={<AddComplaint />} />
        <Route path="/" element={<AllComplaints />} />
        <Route path="/allcomplaints" element={<AllComplaints />} />
        <Route path="/updatestatus" element={<UpdateStatus />} />
        <Route path="/"element={<MyComplaints />} />
        <Route path="/mycomplaints" element={<MyComplaints />} />
        <Route path="/editcomplaint" element={<EditComplaint />} />
        <Route path="/" element={<StudentDashboard />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

