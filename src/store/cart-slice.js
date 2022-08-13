import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: {},
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProduct(state, action) {
			state.cart[action.payload.id]
				? state.cart[action.payload.id].quantity++
				: (state.cart[action.payload.id] = { ...action.payload, quantity: 1 });
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
