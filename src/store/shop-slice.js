import { createSlice } from "@reduxjs/toolkit";
import products from "../shop-data.json";

const initialState = {
	products,
};

const shopSlice = createSlice({
	name: "shop",
	initialState,
	reducers: {},
});

export const shopActions = shopSlice.actions;

export default shopSlice.reducer;
