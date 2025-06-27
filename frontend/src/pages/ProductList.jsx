import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const res = await axios.get("http://localhost:3000/api/products");
    setProducts(res.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await axios.delete(`http://localhost:3000/api/products/delete/${id}`);
      fetchData();
    }
  };

  const handleEdit = (id) => {
    navigate(`/product-form/${id}`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-primary text-pink-700">
          Product List
        </h1>
        <Link
          to="/product-form"
          className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition"
        >
          Add Product
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="max-w-4xl w-full border border-collapse">
          <thead className="bg-purple-200">
            <tr>
              <th className="p-2 text-center border border-gray-500">ID</th>
              <th className="p-2 text-center border border-gray-500">Name</th>
              <th className="p-2 text-center border border-gray-500">
                Price($)
              </th>
              <th className="p-2 text-center border border-gray-500">
                Quantity
              </th>
              <th className="p-1 text-center border border-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod, index) => (
              <tr key={prod.id} className="border-black hover:bg-purple-200">
                <td className="p-2 text-center border border-gray-500">
                  {index + 1}
                </td>
                <td className="p-2 text-center border border-gray-500">
                  {prod.name}
                </td>
                <td className="p-2 text-center border border-gray-500">
                  {prod.price}
                </td>
                <td className="p-2 text-center border border-gray-500">
                  {prod.quantity}
                </td>
                <td className="p-1 border border-gray-500">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <button
                      onClick={() => handleEdit(prod.id)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(prod.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
