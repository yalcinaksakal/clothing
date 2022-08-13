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
const Demo = () => <h1>XXXX</h1>;
const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const unsubscribeFromAuth = onAuthStateChangedListener(userAuth => {
			userAuth && createUserDocFromAuth(userAuth);
			dispatch(loginActions.setUser(userAuth));
		});
		return unsubscribeFromAuth;
	}, [dispatch]);
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="shop" element={<Demo />} />
				<Route path="auth" element={<Auth />} />
			</Route>
		</Routes>
	);
};
export default App;
