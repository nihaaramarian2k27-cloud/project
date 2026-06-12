import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <div>
              <h1>Campus Complaint Management System</h1>

              <p>Report and Track Campus Complaints Easily</p>

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
       
        
       

      </Routes>
    </BrowserRouter>
  );
}

export default App;

