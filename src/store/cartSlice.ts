import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { TRootState } from ".";

export type TCartProduct = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
  thumbnail: string;
};

export type TCart = {
  id: number;
  products: Array<TCartProduct>;
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
};

type TState = {
  userCarts: Array<TCart>;
  status: "idle" | "pending" | "error" | "succeded";
  error: null | string;
};

const baseURL = import.meta.env.VITE_BASE_URL;

export const getCartsByUser = createAsyncThunk(
  "carts/getCartsByUser",
  async ({ userId }: { userId: number }) => {
    try {
      const response = await axios.get(`${baseURL}/carts/user/${userId}`);
      return response.data;
    } catch (error) {
      if (error instanceof Error) return error.message;
      return error;
    }
  }
);

const initialState: TState = {
  userCarts: [],
  status: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartsByUser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getCartsByUser.fulfilled, (state, action) => {
        state.userCarts = action.payload.carts;
      })
      .addCase(getCartsByUser.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload as string;
      });
  },
});

export const cartsSelector = (state: TRootState) => state.cart.userCarts;

export default cartSlice.reducer;
