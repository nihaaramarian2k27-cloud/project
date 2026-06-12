import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentDashboard from "./components/StudentDashboard";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<StudentDashboard />} />

        <Route path="/dashboard" element={<StudentDashboard />} />

        <Route path="/admindashboard" element={<AdminDashboard />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
  
