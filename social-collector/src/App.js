import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Home from "../src/components/Home/home";
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </div>
  );
}


import React from 'react';
import './App.css';
import Homepage from './Homepage';

function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
