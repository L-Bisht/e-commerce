import productTransformer from "../../shared/utils/transformers/productTransformer";
import "./Header.css";
import { TProduct } from "../../shared/types/productTypes";
import { productActions } from "../../store/products";
import { TRootState } from '../../store/store'

import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, InputBase, Paper, Button} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
  HomeOutlined
} from "@mui/icons-material";
import LoginMenu from "../LoginMenu";

function Header() {
  const [searchText, setSearchText] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: TRootState) => state.authentication?.isAuthenticated);
  const updateProducts = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const productSearchURL = new URL("https://dummyjson.com/products/search");
    productSearchURL.searchParams.append("q", searchText);
    axios
      .get(productSearchURL.toString())
      .then((res) => productTransformer(res.data))
      .then((products: Array<TProduct>) => {
        dispatch(productActions.updateAllProducts(products));
        navigate(`/products?q=${searchText}`);
      })
      .catch((err) => console.log("Product while fetching products", err));
  };
  return (
    <header className="header">
      <div className="header__logobox">
        <h1 className="header__logo">
          eCommerce<span style={{ color: "#CD4631" }}>.</span>
        </h1>
      </div>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          borderRadius: "40px",
          paddingLeft: "15px",
        }}
        onSubmit={updateProducts}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search products"
          inputProps={{ "aria-label": "search products in store" }}
          value={searchText}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchText(e.target.value)
          }
        />
        <IconButton
          type="submit"
          sx={{ p: "5px", color: "black" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <div className="header__items">
        <IconButton
          onClick={() => navigate("/")}
          type="button"
          sx={{ p: "10px", color: "black" }}
          aria-label="home"
        >
          <HomeOutlined />
        </IconButton>
        <IconButton
          onClick={() => navigate("/wishlist")}
          type="button"
          sx={{ p: "10px", color: "black" }}
          aria-label="wishlist"
        >
          <FavoriteBorderOutlined />
        </IconButton>
        <IconButton
          onClick={() => navigate("/shopping-cart")}
          type="button"
          sx={{ p: "10px", color: "black" }}
          aria-label="shopping cart"
        >
          <ShoppingCartOutlined />
        </IconButton>
        {isAuthenticated ?
          (
            <LoginMenu />
          )
          :
          (<Button
            onClick={() => navigate("/login")}
            sx={{ borderRadius: "20px" }}
            variant="contained"
          >
            Log in
          </Button>)
        }
      </div>
    </header>
  );
}

export default Header;
