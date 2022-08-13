import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login-slice";
import shopReducer from "./shop-slice";
const store = configureStore({
	reducer: {
		login: loginReducer,
		shop: shopReducer,
	},
});

export default store;
