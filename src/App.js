import Home from "./routes/home/home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Nav/nav";
import Auth from "./routes/auth/auth";
import { useEffect } from "react";
import {
	createUserDocFromAuth,
	onAuthStateChangedListener,
} from "./utils/firebase.auth";
import { useDispatch } from "react-redux";
import { loginActions } from "./store/login-slice";
import Shop from "./routes/shop/shop";
import Checkout from "./routes/checkout/checkout";
import { getProductsData } from "./store/shop-slice-thunk-aciton";

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const unsubscribeFromAuth = onAuthStateChangedListener(async userAuth => {
			userAuth && (userAuth = await createUserDocFromAuth(userAuth));
			dispatch(loginActions.setUser(userAuth));
		});
		dispatch(getProductsData());
		return unsubscribeFromAuth;
	}, [dispatch]);
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="shop/*" element={<Shop />} />
				<Route path="auth" element={<Auth />} />
				<Route path="checkout" element={<Checkout />} />
			</Route>
		</Routes>
	);
};
export default App;
