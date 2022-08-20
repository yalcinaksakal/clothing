import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "../utils/firebase.auth";
import { shopActions } from "./shop-slice";

export const getProductsData = () => {
	return async dispatch => {
		try {
			const products = await getCategoriesAndDocuments();
			if (products) dispatch(shopActions.setProducts(products));
		} catch (error) {
			console.log(error.message);
		}
	};
};

export const getProductsData1 = createAsyncThunk(
	"shop/getProductsData",
	async () => {
		try {
			const products = await getCategoriesAndDocuments();
			return products;
		} catch (error) {
			console.log(error.message);
		}
	}
);
