import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        
        await axios.put(`http://localhost:3000/api/products/update/${id}`, formData);

        setMessage("Product updated!");
        console.log(formData);
      } else {
      
        await axios.post("http://localhost:3000/api/products/add-product", formData);
        setMessage("Product created!");
      }
      navigate("/product-list");
    } catch (err) {
      console.log(err);
      setMessage("Error saving product");
    }
  };
 useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/api/products/${id}`)
        .then((res) => {
          setFormData(res.data);
        })
        .catch((err) => {
          console.error("Failed to fetch product", err);
        });
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-pink-100 p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <div className="flex justify-between items-baseline ">
        <h2 className="text-2xl font-bold text-accent mb-6 flex justify-center text-pink-700">
         {id ? "Edit Product" : "Add Product"}
        </h2>
        <Link to='/product-list'><span className='text-purple-900 cursor-pointer underline'>Back to ProductList</span></Link>
        </div>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="w-full mb-4 p-3 border border-purple-400 rounded focus:outline-none"
        />

        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price($)"
          required
          className="w-full mb-4 p-3 border border-purple-400 rounded focus:outline-none"
        />

        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          required
          className="w-full mb-6 p-3 border border-purple-400 rounded focus:outline-none"
        />

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded bg-purple-600 hover:bg-purple-600 transition"
        >
        {id ? "Update" : "Submit"}
        </button>

        {message && (
          <p className="text-center  mt-4 text-green-700 font-semibold">
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default AddProduct;
