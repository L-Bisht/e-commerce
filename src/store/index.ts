import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import authenticationReducer from "./authenticationSlice";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    authentication: authenticationReducer,
    cart: cartReducer,
    product: productReducer,
  },
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
export default store;
