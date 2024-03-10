import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SignUp from './Components/Signup';
import Login from './Components/Login'; 
import './App.css';
import logo from './images/Foody.jpg';
import Welcome from './Components/HomePage';
import load from './Restaurants/SreeFortune';

function Home() {
  return <h2>Home Page</h2>;
}


function App() {
  const handleSignUp = (formData) => {
    console.log('Form data received in App:', formData);
  };

  const handleLogin = (userData) => {
    console.log('User data received in App:', userData);
  };

  return (
    <div className="App">
      <header>
        <img src={logo} alt="Logo" className="logo" />
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/HomePage" element={<Welcome />} />
        <Route path="/restaurant/0" element={<load />} />
      </Routes>
    </div>
  );
}

export default App;
