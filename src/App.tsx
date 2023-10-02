import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </>
  );
}

export default App;
