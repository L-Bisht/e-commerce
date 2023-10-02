import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import productTransformer from "../../shared/utils/transformers/productTransformer";
import "./Header.css";
import { TProduct } from "../../shared/types/productTypes";
import { productActions } from "../../store/products";
function Header() {
  const [searchText, setSearchText] = useState<string>("");
  const dispatch = useDispatch();
  const updateProducts = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const productSearchURL = new URL("https://dummyjson.com/products/search");
    productSearchURL.searchParams.append("q", searchText);
    axios
      .get(productSearchURL.toString())
      .then((res) => productTransformer(res.data))
      .then((products: Array<TProduct>) =>
        dispatch(productActions.updateAllProducts(products))
      );
  };
  return (
    <header className="header">
      <form onSubmit={updateProducts}>
        <input
          type="text"
          name="search"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchText(e.target.value)
          }
          value={searchText}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

export default Header;
