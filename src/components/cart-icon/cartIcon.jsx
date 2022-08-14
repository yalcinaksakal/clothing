import "./cartIcon.scss";
import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const CartIcon = ({ toogleCartVisibility }) => {
	const { count } = useSelector(state => state.cart),
		[bump, setBump] = useState(false);
	useEffect(() => {
		if (!count) return;
		setBump(true);
		const bumpTimer = setTimeout(() => setBump(false), 300);
		return () => clearTimeout(bumpTimer);
	}, [count]);
	return (
		<div
			className="cart-icon-container"
			onMouseEnter={toogleCartVisibility}
			onMouseLeave={toogleCartVisibility}
		>
			<Icon className={`shopping-icon ${bump ? "bump" : ""}`} />
			<span className={`item-count ${bump ? "bump" : ""}`}>{count}</span>
		</div>
	);
};
export default CartIcon;
