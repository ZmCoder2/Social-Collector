import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from '../src/components/Home/home';
// import Categories from '../src/components/Categories/';
import Profile from '../src/components/Profile/profile';
import Signup from '../src/components/Signup/signup';
import Login from '../src/components/Login/login';
import Navbar from '../src/components/Navbar/nav';
import './App.css';

function App() {
  return (
    <HashRouter basename="/">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/categories" element={<Categories />} /> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
