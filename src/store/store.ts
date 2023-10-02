import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products";
import authenticationReducer from "./authentication";

export default configureStore({
  reducer: {
    products: productsReducer,
    authentication: authenticationReducer,
  },
});
