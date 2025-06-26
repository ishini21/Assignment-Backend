import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const res = await axios.get('http://localhost:3000/api/products');
    setProducts(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-primary text-pink-700">Product List</h1>
        <Link to="/add-product" className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition">
          Add Product
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-purple-200">
          <thead className="bg-purple-200">
            <tr>
              <th className="p-3 text-center">Name</th>
              <th className="p-3 text-center">Price</th>
              <th className="p-3 text-center">Quantity</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
              <tr key={prod.id} className="border-black  hover:bg-purple-50">
                <td className="p-3 text-center">{prod.name}</td>
                <td className="p-3 text-center">${prod.price}</td>
                <td className="p-3 text-center">{prod.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
