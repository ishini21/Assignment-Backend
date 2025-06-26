import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [formData, setFormData] = useState({ name: '', price: '', quantity: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/products/add-product', formData);
      setMessage('Product created!');
      navigate('/');
    } catch (err) {
        console.log(err);
      setMessage('Error creating product');
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="bg-pink-100 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-accent mb-6 flex justify-center text-pink-700">Add Product</h2>

        <input type="text" name="name" onChange={handleChange} placeholder="Name" required
          className="w-full mb-4 p-3 border border-purple-500 rounded focus:outline-none" />

        <input type="number" name="price" onChange={handleChange} placeholder="Price" required
          className="w-full mb-4 p-3 border border-purple-500 rounded focus:outline-none" />

        <input type="number" name="quantity" onChange={handleChange} placeholder="Quantity" required
          className="w-full mb-6 p-3 border border-purple-500 rounded focus:outline-none" />

        <button type="submit" className="w-full bg-primary text-white py-3 rounded bg-purple-600 hover:bg-purple-600 transition">
          Submit
        </button>

        {message && <p className="text-center  mt-4 text-purple-700">{message}</p>}
      </form>
    </div>
  );
};

export default AddProduct;
