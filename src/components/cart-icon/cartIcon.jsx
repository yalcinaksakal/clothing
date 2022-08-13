import "./cartIcon.scss";
import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";
const CartIcon = ({ toogleCartVisibility }) => {
	return (
		<div
			className="cart-icon-container"
			onMouseEnter={toogleCartVisibility}
			onMouseLeave={toogleCartVisibility}
		>
			<Icon className="shopping-icon" />
			<span className="item-count">0</span>
		</div>
	);
};
export default CartIcon;
