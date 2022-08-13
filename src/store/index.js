import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login-slice";
import shopReducer from "./shop-slice";
import cartReducer from "./cart-slice";
const store = configureStore({
	reducer: {
		login: loginReducer,
		shop: shopReducer,
		cart: cartReducer,
	},
});

export default store;
