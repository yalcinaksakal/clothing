import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login-slice";
import shopReducer from "./shop-slice";
import cartReducer from "./cart-slice";

const loggerMiddleware = store => next => action => {
	if (!action.type) {
		return next(action);
	}

	console.log("=====> type: ", action.type);
	console.log("       payload: ", action.payload);
	console.log(
		"       currentState: ",
		store.getState()[action.type.split("/")[0]]
	);

	next(action);

	console.log(
		"       next state: ",
		store.getState()[action.type.split("/")[0]]
	);
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
