import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products";
import authenticationReducer from "./authentication";
import cartReducer from './cart';
import productReducer from './product'

const store = configureStore({
  reducer: {
    products: productsReducer,
    authentication: authenticationReducer,
    cart: cartReducer,
    product: productReducer
  },
});

export type TRootState = ReturnType<typeof store.getState>;
export default store;
