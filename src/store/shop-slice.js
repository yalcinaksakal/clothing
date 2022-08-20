import { createSlice } from "@reduxjs/toolkit";
import { getProductsData1 } from "./shop-slice-thunk-aciton";
// import SHOP_DATA from "../shop-data";
// import products from "../shop-data.json";
// import { addCollectionAndDocuments } from "../utils/firebase.auth";

// addCollectionAndDocuments("categories", SHOP_DATA);

const initialState = {
	products: {},
	isLoading: false,
};

const shopSlice = createSlice({
	name: "shop",
	initialState,
	reducers: {
		setProducts(state, action) {
			state.products = action.payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(getProductsData1.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(getProductsData1.fulfilled, (state, action) => {
			state.products = action.payload;
			state.isLoading = false;
		});
		builder.addCase(getProductsData1.rejected, state => {
			state.isLoading = false;
			console.log("Couldn't fetch products from firebase");
		});
	},
});

export const shopActions = shopSlice.actions;

export default shopSlice.reducer;
