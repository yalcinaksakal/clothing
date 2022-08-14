import { Route, Routes } from "react-router-dom";
import Categories from "../categories/categories";
import Category from "../category/category";

import "./shop.scss";

const Shop = () => {
	return (
		<Routes>
			<Route index element={<Categories />}></Route>
			<Route path=":category" element={<Category />}></Route>
		</Routes>
	);
};
export default Shop;
