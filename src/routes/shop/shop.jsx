import { useSelector } from "react-redux";

const Shop = () => {
	const { products } = useSelector(state => state.shop);
	return (
		<div>
			{products.map(({ id, name }) => (
				<h1 key={id}>{name}</h1>
			))}
		</div>
	);
};
export default Shop;
