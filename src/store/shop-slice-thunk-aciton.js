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
