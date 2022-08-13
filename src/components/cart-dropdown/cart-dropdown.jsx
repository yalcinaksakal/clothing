import { useSelector } from "react-redux";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import "./cart-dropdown.scss";

const CartDropdown = ({ toogleCartVisibility }) => {
	const { cart } = useSelector(state => state.cart);
	return (
		<div
			className="invisible-container"
			onMouseEnter={toogleCartVisibility}
			onMouseLeave={toogleCartVisibility}
		>
			<div className="cart-dropdown-container">
				<div className="cart-items">
					{Object.values(cart).map(item => (
						<CartItem key={item.id} item={item} />
					))}
				</div>
				<Button>Go to checkout</Button>
			</div>
		</div>
	);
};
export default CartDropdown;
