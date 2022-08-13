import "./cartIcon.scss";
import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";
import { useSelector } from "react-redux";
const CartIcon = ({ toogleCartVisibility }) => {
	const { count } = useSelector(state => state.cart);
	return (
		<div
			className="cart-icon-container"
			onMouseEnter={toogleCartVisibility}
			onMouseLeave={toogleCartVisibility}
		>
			<Icon className="shopping-icon" />
			<span className="item-count">{count}</span>
		</div>
	);
};
export default CartIcon;
