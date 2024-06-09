import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dummyJSONProductsTransformer } from "../shared/utils/transformers/productTransformer";
import {
  TDummyJSONProductResponse,
  TProduct,
} from "../shared/types/productTypes";
import axios from "axios";
import { TRootState } from ".";

const baseURL = import.meta.env.VITE_BASE_URL;

type TState = {
  products: Array<TProduct>;
  error: null | string;
  status: "idle" | "loading" | "succeeded" | "failed";
};
const initialState: TState = {
  products: [] as Array<TProduct>,
  error: null,
  status: "idle",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (payload: {
    query: string;
  }): Promise<TDummyJSONProductResponse | string> => {
    try {
      const productSearchURL = new URL(`${baseURL}/products/search`);
      productSearchURL.searchParams.append("q", payload.query);
      const response = await axios.get(productSearchURL.toString());
      return response.data;
    } catch (error) {
      if (error instanceof Error) return error.message;
      return String(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products =
          dummyJSONProductsTransformer(
            action.payload as TDummyJSONProductResponse
          ) || [];
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.payload as string;
        state.status = "failed";
      });
  },
});

export const productsSelector = (state: TRootState) => state.products.products;
export const errorSelector = (state: TRootState) => state.products.error;
export const statusSelector = (state: TRootState) => state.products.status;

export default productsSlice.reducer;
