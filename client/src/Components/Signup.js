import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    const Data = new FormData(e.currentTarget);
    axios.post('http://localhost:8081/insert',
    {
      FirstName : Data.get('firstName'),
      LastName : Data.get('lastName'),
      GSTIN : Data.get('GSTIN'),
      Email : Data.get('email'),
      Password : Data.get('password'),
    }).then((res) => {
      console.log(res.Data)
    })

  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
      <h2 className='header'>Foody Partner</h2>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            id = "FirstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
            id = "LastName"
          />
        </div>
        <div className='form-group'>
          <input
            type="text"
            name="GSTIN"
            value={formData.GSTIN}
            onChange={handleChange}
            placeholder='GSTIN Number'
            required
            id = "GSTIN"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            id = "Email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            id = "Password"
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/">Go to Home</Link>
      </p>
    </div>
  );
}

export default SignUp;
