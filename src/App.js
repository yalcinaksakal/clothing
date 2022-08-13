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

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const unsubscribeFromAuth = onAuthStateChangedListener(async userAuth => {
			userAuth && (userAuth = await createUserDocFromAuth(userAuth));
			console.log(userAuth);
			dispatch(loginActions.setUser(userAuth));
		});
		return unsubscribeFromAuth;
	}, [dispatch]);
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="shop" element={<Shop />} />
				<Route path="auth" element={<Auth />} />
			</Route>
		</Routes>
	);
};
export default App;
