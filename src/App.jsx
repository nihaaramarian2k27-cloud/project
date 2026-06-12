import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddComplaint from "./components/AddComplaint";

function App() {
  return (
    <BrowserRouter>
      <Routes>

       < Route path="/" element={<AddComplaint  />} />
<Route path="/addcomplaint" element={<AddComplaint />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
