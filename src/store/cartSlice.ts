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
  userCart: TCart;
  status: "idle" | "pending" | "error" | "succeded";
  error: null | string;
};

const baseURL = import.meta.env.VITE_BASE_URL + "/carts";

export const getCartByUser = createAsyncThunk(
  "cart/getCartsByUser",
  async ({ userId }: { userId: number }) => {
    try {
      const response = await axios.get(`${baseURL}/user/${userId}`);
      return response.data;
    } catch (error) {
      if (error instanceof Error) return error.message;
      return error;
    }
  }
);

export const updateCart = createAsyncThunk(
  "carts/updateCart",
  async ({ cartId, products }: { cartId: number; products: object }) => {
    try {
      const response = await axios.put(`${baseURL}/${cartId}`, {
        merge: true,
        products,
      });
      return response.data;
    } catch (error) {
      if (error instanceof Error) return error.message;
      return error;
    }
  }
);

const initialState: TState = {
  userCart: {} as TCart,
  status: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartByUser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getCartByUser.fulfilled, (state, action) => {
        state.userCart = action.payload.carts?.[0] || {};
      })
      .addCase(getCartByUser.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload as string;
      })
      .addCase(updateCart.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        state.userCart = action.payload;
      })
      .addCase(updateCart.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload as string;
      });
  },
});

export const cartsSelector = (state: TRootState) => state.cart.userCart;

export default cartSlice.reducer;
