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
    profilePhoto: null,
  });
  const [signupSuccess, setSignupSuccess] = useState(false); // State to track sign up success

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profilePhoto') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create a FormData object to store form data including the image
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    
    // Append the profile photo to FormData
    formDataToSend.append('image', formData.profilePhoto);
  
    // Send a POST request to the server with the FormData
    axios.post('http://localhost:8081/insertImage', formDataToSend)
      .then((res) => {
        console.log(res.data);
        setSignupSuccess(true); // Set signup success state to true
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };
  

  const handleClosePopup = () => {
    setSignupSuccess(false); // Close the popup
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className='header'>Foody Partner</h2>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
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
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
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
            required
          />
        </div>
        <div className="form-group">
          <input
            type="file"
            name="profilePhoto"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/">Go to Home</Link>
      </p>
      {signupSuccess && (
        <div className="signup-success-popup">
          <div className="popup-content">
            <span className="close-btn" onClick={handleClosePopup}>×</span>
            <p>Sign Up Successful!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignUp;
