import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login-slice";
import shopReducer from "./shop-slice";
import cartReducer from "./cart-slice";

const loggerMiddleware = store => next => action => {
	if (!action.type) {
		return next(action);
	}

	console.log("type: ", action.type);
	console.log("payload: ", action.payload);
	console.log("currentState: ", store.getState());

	next(action);

	console.log("next state: ", store.getState());
};

const store = configureStore({
	reducer: {
		login: loginReducer,
		shop: shopReducer,
		cart: cartReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(loggerMiddleware),
	// middleware: [loggerMiddleware],
});

export default store;
