import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "../shared/types/productTypes";

type TState = {
  selectedProduct: TProduct;
};
const initialState: TState = {
  selectedProduct: {} as TProduct,
};

const productSlice = createSlice({
  name: "selectedProduct",
  initialState,
  reducers: {
    setSelectedProduct(
      state: TState,
      action: { type: string; payload: TProduct }
    ) {
      state.selectedProduct = action.payload;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
