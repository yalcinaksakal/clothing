import "./checkout-item.scss";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CheckoutItem = ({ item }) => {
	const { name, imageUrl, price, quantity, id } = item,
		dispatch = useDispatch();
	return (
		<div className="checkout-item-container">
			<div className="image-container">
				<img src={imageUrl} alt={name} />
			</div>
			<div className="name">{name}</div>
			<div className="quantity">
				<span
					className="arrow"
					onClick={() => dispatch(cartActions.subtractProduct(id))}
				>
					&#60;
				</span>
				<span className="value">{quantity}</span>
				<span
					className="arrow"
					onClick={() => dispatch(cartActions.addProduct(item))}
				>
					&#62;
				</span>
			</div>
			<div className="price">{quantity * price}</div>
			<div
				className="remove-button"
				onClick={() => dispatch(cartActions.deleteProduct(id))}
			>
				&#10005;
			</div>
		</div>
	);
};

export default CheckoutItem;
