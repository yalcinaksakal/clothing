import Button from "../button/button";
import "./product-card.styles.scss";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const ProductCard = props => {
	const { name, price, imageUrl } = props,
		dispatch = useDispatch(),
		addItemHandler = () => dispatch(cartActions.addProduct(props));

	return (
		<div className="product-card-container">
			<div className="img-container">
				<img alt={name} src={imageUrl} />
			</div>
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">{price}€</span>
			</div>
			<Button buttonType="inverted" onClick={addItemHandler}>
				Add to card
			</Button>
		</div>
	);
};
export default ProductCard;
