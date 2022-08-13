import Home from "./routes/home/home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Nav/nav";
import SignIn from "./routes/sign-in/sign-in";

const Demo = () => <h1>XXXX</h1>;
const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="shop" element={<Demo />} />
				<Route path="signIn" element={<SignIn />} />
			</Route>
		</Routes>
	);
};
export default App;
