import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import WishListPage from "./pages/WishlistPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import SignUpPage from "./pages/SingUpPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";
import Layout from "./components/Layout";
import "./App.css";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#111827",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="/wishlist" element={<WishListPage />} />
          <Route path="/shopping-cart" element={<ShoppingCartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
