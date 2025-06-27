import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import ProductForm from "./components/ProductForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/product-list" element={<ProductList />} />
      <Route path="/product-form" element={<ProductForm />} />
      <Route path="/product-form/:id" element={<ProductForm />} />
    </Routes>
  );
}

export default App;
