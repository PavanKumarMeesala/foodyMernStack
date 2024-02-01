import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SignUp from './Components/Signup';  
import './App.css';// Correct the import path

function Home() {
  return <h2>Home Page</h2>; // Add a home page component or content
}

function App() {
  const handleSignUp = (formData) => {
    // Handle the form data here (e.g., send it to the server)
    console.log('Form data received in App:', formData);
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />
      </Routes>
    </div>
  );
}

export default App;
