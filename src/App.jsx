import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from "./components/sandy/Home";
import About from "./components/sandy/About"
import Contact from "./components/sandy/Contact";
import './App.css';
import Navbar from './components/Navbar';
import Project from './components/sandy/project';
function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    document.body.className = darkTheme ? 'dark' : 'light';
  }, [darkTheme]);

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />
        <Route path="/project" element={<Project darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />
        <Route path="/about" element={<About darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />
        <Route path="/contact" element={<Contact darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />
      </Routes>
    </div>
  );
}

export default App;
