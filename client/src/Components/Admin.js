import React, { useState } from 'react';
import axios from 'axios';
import './AdminStyle.css';

const AdminPortal = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('image', image);

    try {
      const response = await axios.post('/api/dishes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Dish added successfully:', response.data);
      // Optionally, you can redirect to another page after successful submission
    } catch (error) {
      console.error('Error adding dish:', error);
    }
  };

  return (
    <div className="admin-portal-container">
      <h2>Add New Dish</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
       <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit" className="submit-button">Add Dish</button>
      </form>
    </div>
  );
};

export default AdminPortal;
