import { useSelector } from "react-redux";
import ProductCard from "../../components/product-card/product-card";
import { useParams } from "react-router-dom";
import "./category.scss";

const Category = () => {
	const { category } = useParams(),
		products = useSelector(state => state.shop).products;
	return (
		products[category] && (
			<>
				<h2>{category.toLocaleUpperCase()}</h2>

				<div className="products-container">
					{products[category].items.map(product => (
						<ProductCard key={product.id} {...product} />
					))}
				</div>
			</>
		)
	);
};
export default Category;
