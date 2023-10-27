import { createSlice } from "@reduxjs/toolkit";

export type TCartProduct = {
	id: number;
	title: string;
	price: number;
	quantity: number;
	total: number;
	discountPercentage: number;
	discountedPrice: number;
	thumbnail: string;
}

export type TCart = {
  id: number;
  products: Array<TCartProduct>
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
};
type TState = {
	allCarts: Array<TCart>
}

const initialState: TState = {
	allCarts: []
};

const cartSlice = createSlice({
	name: 'carts',
	initialState,
	reducers: {
		updateUserCarts(state, action) {
			state.allCarts = action.payload.carts;
		}
	}
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;