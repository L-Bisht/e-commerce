import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import WishListPage from "./pages/WishlistPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/wishlist" element={<WishListPage />} />
        <Route path="/shopping-cart" element={<ShoppingCartPage />} />
      </Routes>
    </>
  );
}

export default App;
