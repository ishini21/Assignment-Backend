import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/auth/login', formData);
      setMessage(res.data.message);
     
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100">
      <form onSubmit={handleSubmit} className="bg-pink-100 p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-accent mb-6">Login</h2>

        <input type="email" name="email" onChange={handleChange} placeholder="Email"
          className="w-full mb-4 p-3 border border-pink-600 rounded-lg focus:outline-none" required />
        
        <input type="password" name="password" onChange={handleChange} placeholder="Password"
          className="w-full mb-6 p-3 border border-pink-600 rounded-lg focus:outline-none" required />
        
        <button type="submit" className="w-full bg-accent text-white py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition">
          Login
        </button>

         <div className="">
            <p className="text-black text-center text-xs mt-4">
            Don't have an account? {""}
            <Link to='/signup'><span className='text-pink-600 cursor-pointer underline'>SignUp</span>
            </Link></p>
        </div>

        {message && <p className="mt-4 text-center text-green-700 font-medium">{message}</p>}
      </form>
    </div>
  );
};

export default Login;
