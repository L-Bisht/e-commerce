import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products";
import authenticationReducer from "./authentication";

const store = configureStore({
  reducer: {
    products: productsReducer,
    authentication: authenticationReducer,
  },
});

export type TRootState = ReturnType<typeof store.getState>;
export default store;
