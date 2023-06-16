import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/home';
import Categories from './components/Categories/categories';
import Profile from './components/Profile/profile';
import Signup from './components/Signup/signup';
import Login from './components/Login/login';
import './App.css';


function App() {
  return (
    <HashRouter basename="/">
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
</HashRouter>
  );
}

export default App;
