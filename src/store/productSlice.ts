import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TDummyJSONProduct, TProduct } from "../shared/types/productTypes";
import axios from "axios";
import { TRootState } from ".";
import { dummJsonProductTransformer } from "../shared/utils/transformers/productTransformer";

type TState = {
  selectedProduct: TProduct;
  status: "idle" | "pending" | "error" | "succeded";
  error: null | string;
};
const initialState: TState = {
  selectedProduct: {} as TProduct,
  status: "idle",
  error: null,
};

const baseURL = import.meta.env.VITE_BASE_URL;

export const fetchProduct = createAsyncThunk(
  "selectedProduct/fetchProduct",
  async (payload: { productId: string }) => {
    try {
      const product = await axios.get(
        `${baseURL}/products/${payload.productId}`
      );
      return product.data as TProduct;
    } catch (error) {
      if (error instanceof Error) return error.message;
      return error;
    }
  }
);

const productSlice = createSlice({
  name: "selectedProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.selectedProduct = dummJsonProductTransformer(
          action.payload as TDummyJSONProduct
        );
        state.status = "succeded";
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload as string;
      });
  },
});

export const productSelector = (state: TRootState) =>
  state.product.selectedProduct;

export const productActions = productSlice.actions;
export default productSlice.reducer;
