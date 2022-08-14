import { createSlice } from "@reduxjs/toolkit";
// import SHOP_DATA from "../shop-data";
// import products from "../shop-data.json";
// import { addCollectionAndDocuments } from "../utils/firebase.auth";

// addCollectionAndDocuments("categories", SHOP_DATA);
console.log("shop.slice");
const initialState = {
	products: {},
};

const shopSlice = createSlice({
	name: "shop",
	initialState,
	reducers: {
		setProducts(state, action) {
			state.products = action.payload;
			console.log(action.payload);
		},
	},
});

export const shopActions = shopSlice.actions;

export default shopSlice.reducer;
