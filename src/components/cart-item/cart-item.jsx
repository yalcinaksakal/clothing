import "./cart-item.scss";

const CartItem = ({ item }) => {
	const { name, imageUrl, price, quantity } = item;
	return (
		<div className="cart-item-container">
			<img src={imageUrl} alt={name} />
			<div className="item-details">
				<span className="name">{name}</span>
				<span className="price">
					{quantity} X {price}
				</span>
			</div>
		</div>
	);
};
export default CartItem;
