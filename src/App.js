import Home from "./routes/home/home";
import { Routes, Route, Outlet } from "react-router-dom";
const Navigation = () => {
	return (
		<div>
			<div>
				<h1>Nav</h1>
			</div>
			<Outlet />
		</div>
	);
};
const Demo = () => <h1>XXXX</h1>;
const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="shop" element={<Demo />} />
			</Route>
		</Routes>
	);
};
export default App;
