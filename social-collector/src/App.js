import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "../src/components/Home/home";
import Categories from '../src/components/Categories/categories';
import Profile from '../src/components/Profile/profile';
import Signup from '../src/components/Signup/signup';
import Login from '../src/components/Login/login';

import './App.css';



function App() {
  return (
    <HashRouter basename="/">
    <Routes>
        <Route index element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
</HashRouter>
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
import React from 'react';
import './App.css';
import Homepage from './Homepage';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
    </div>
  );
}
export default App;
