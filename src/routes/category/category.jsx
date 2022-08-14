import { useSelector } from "react-redux";
import ProductCard from "../../components/product-card/product-card";
import { useParams } from "react-router-dom";
import "./category.scss";
import SpinnerDots from "../../components/spinner/SpinnerDots";

const Category = () => {
	const { category } = useParams(),
		products = useSelector(state => state.shop).products[category];
	console.log(products);
	return (
		<>
			<h2>{category.toLocaleUpperCase()}</h2>
			{products ? (
				<div className="products-container">
					{products.map(product => (
						<ProductCard key={product.id} {...product} />
					))}
				</div>
			) : (
				<SpinnerDots />
			)}
		</>
	);
};
export default Category;
