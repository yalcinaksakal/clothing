import { createSlice } from "@reduxjs/toolkit";
import products from "../shop-data.json";
console.log(products);
const initialState = {
	products,
};

const shopSlice = createSlice({
	name: "shop",
	initialState,
	reducers: {
		setUser(state, action) {
			state.user = action.payload;
		},
	},
});

export const shopActions = shopSlice.actions;

export default shopSlice.reducer;
