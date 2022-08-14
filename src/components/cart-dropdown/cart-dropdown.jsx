import { useSelector } from "react-redux";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import { useNavigate, useLocation } from "react-router-dom";
import "./cart-dropdown.scss";

const CartDropdown = ({ toogleCartVisibility }) => {
	const { cart, count } = useSelector(state => state.cart),
		navigate = useNavigate(),
		{ pathname } = useLocation(),
		gotoCheckout = () => {
			navigate("/checkout");
			toogleCartVisibility();
		};
	return count && pathname !== "/checkout" ? (
		<div
			className="invisible-container"
			onMouseEnter={toogleCartVisibility}
			onMouseLeave={toogleCartVisibility}
		>
			<div className="cart-dropdown-container">
				<div className="cart-items">
					{Object.values(cart)
						.filter(item => item.quantity)
						.map(item => (
							<CartItem key={item.id} item={item} />
						))}
				</div>
				<Button onClick={gotoCheckout}>Go to checkout</Button>
			</div>
		</div>
	) : null;
};
export default CartDropdown;
