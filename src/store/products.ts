import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "../shared/types/productTypes";

type TState = {
  allProducts: Array<TProduct>;
};
const initialState: TState = {
  allProducts: [] as Array<TProduct>,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateAllProducts(
      state: TState,
      action: { type: string; payload: Array<TProduct> }
    ) {
      state.allProducts = action.payload;
    },
  },
});

export const productActions = productsSlice.actions;
export default productsSlice.reducer;
