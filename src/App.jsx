import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllComplaints from "./components/AllComplaints";
import UpdateStatus from "./components/UpdateStatus";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<AllComplaints />} />

        <Route path="/allcomplaints" element={<AllComplaints />} />

        <Route path="/updatestatus" element={<UpdateStatus />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
