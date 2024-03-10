import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission
    console.log('Username:', username);
    console.log('Password:', password);

    try {
      const response = await axios.post('http://localhost:8081/login', {
        username,
        password
      });
      if (response && response.data) {
        console.log(response.data);
        console.log("Login Successful");
        navigate('/HomePage')
      } else {
        console.error('Error: Empty response');
      }
    } catch (error) {
      console.error('Error:', error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="login-form">
        <form className="form-group" onSubmit={handleLogin}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;