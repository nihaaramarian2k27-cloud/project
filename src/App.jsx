import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddComplaint from "./components/AddComplaint";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllComplaints from "./components/AllComplaints";
import UpdateStatus from "./components/UpdateStatus";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MyComplaints from "./components/MyComplaints";
import EditComplaint from "./components/EditComplaint";

function App() {
  return (
    <BrowserRouter>
      <Routes>

       < Route path="/" element={<AddComplaint  />} />
<Route path="/addcomplaint" element={<AddComplaint />} />
        <Route path="/" element={<AllComplaints />} />

        <Route path="/allcomplaints" element={<AllComplaints />} />

        <Route path="/updatestatus" element={<UpdateStatus />} />
       <Route path="/"element={<MyComplaints />} />
        <Route path="/mycomplaints" element={<MyComplaints />} />
        <Route path="/editcomplaint" element={<EditComplaint />} />
 
      </Routes>
    </BrowserRouter>
  );
}
export default App;
