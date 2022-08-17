import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";

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
	},
	persistConfig = {
		key: "root",
		storage,
	},
	persistedCartReducer = persistReducer(persistConfig, cartReducer),
	defaultMiddleware = getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
	defaultMiddlewareConcatLogger = getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(loggerMiddleware),
	store = configureStore({
		reducer: {
			login: loginReducer,
			shop: shopReducer,
			cart: persistedCartReducer,
		},
		middleware:
			process.env.NODE_ENV === "production"
				? defaultMiddleware
				: defaultMiddlewareConcatLogger,
		// middleware: [loggerMiddleware],
	});

export const persistor = persistStore(store);

export default store;
