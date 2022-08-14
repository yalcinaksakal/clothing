import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card";
import SpinnerDots from "../../components/spinner/SpinnerDots";

import "./categories.scss";

const Categories = () => {
	const { products } = useSelector(state => state.shop);
	return products ? (
		<>
			{Object.keys(products).map(title => (
				<Fragment key={title}>
					<h2 className="heading">
						<Link className="link" to={"/shop/" + title}>
							{title}
						</Link>
					</h2>
					<div className="products-container">
						{products[title].slice(0, 4).map(product => (
							<ProductCard key={product.id} {...product} />
						))}
					</div>
				</Fragment>
			))}
		</>
	) : (
		<SpinnerDots />
	);
};
export default Categories;
