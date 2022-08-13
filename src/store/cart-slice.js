import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: {},
	count: 0,
	total: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProduct(state, action) {
			state.cart[action.payload.id]
				? state.cart[action.payload.id].quantity++
				: (state.cart[action.payload.id] = { ...action.payload, quantity: 1 });
			state.count++;
			state.total += action.payload.price;
		},
		deleteProduct(state, action) {
			const id = action.payload;
			state.count -= state.cart[id].quantity;
			state.total -= state.cart[id].quantity * state.cart[id].price;
			state.cart[id].quantity = 0;
		},
		subtractProduct(state, action) {
			const id = action.payload;
			state.cart[id].quantity--;
			state.count--;
			state.total -= state.cart[id].price;
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
