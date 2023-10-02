import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateAllProducts(state, action) {
      state.allProducts = action.payload;
    },
  },
});

export const counterActions = productsSlice.actions;
export default productsSlice.reducer;
