import Button from "../button/button";
import "./cart-dropdown.scss";

const CartDropdown = ({ toogleCartVisibility }) => {
	return (
		<div
			className="invisible-container"
			onMouseEnter={toogleCartVisibility}
			onMouseLeave={toogleCartVisibility}
		>
			<div className="cart-dropdown-container">
				<div className="cart-items"></div>
				<Button>Go to checkout</Button>
			</div>
		</div>
	);
};
export default CartDropdown;
