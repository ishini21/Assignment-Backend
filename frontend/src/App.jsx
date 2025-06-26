import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/product-list" element={<ProductList />} />
      <Route path="/add-product" element={<AddProduct />} />
    </Routes>
  );
}

export default App;
