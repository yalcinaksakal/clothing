import { Fragment } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/product-card/product-card";
import "./shop.scss";

const Shop = () => {
	const { products } = useSelector(state => state.shop);
	return (
		<>
			{Object.keys(products).map(title => (
				<Fragment key={title}>
					<h2>{title}</h2>
					<div className="products-container">
						{products[title].map(product => (
							<ProductCard key={product.id} {...product} />
						))}
					</div>
				</Fragment>
			))}
		</>
	);
};
export default Shop;
