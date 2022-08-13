import { useSelector } from "react-redux";
import ProductCard from "../../components/product-card/product-card";
import "./shop.scss";
const Shop = () => {
	const { products } = useSelector(state => state.shop);
	return (
		<div className="products-container">
			{products.map(product => (
				<ProductCard key={product.id} {...product} />
			))}
		</div>
	);
};
export default Shop;
