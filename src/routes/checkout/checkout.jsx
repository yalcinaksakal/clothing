import "./checkout.scss";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item";

const headers = ["Product", "Description", "Quantity", "Price", "Remove"];
const Checkout = () => {
	const { cart, total } = useSelector(state => state.cart);
	return (
		<div className="checkout-container">
			<div className="checkout-header">
				{headers.map((h, i) => (
					<div key={i} className="header-block">
						{h}
					</div>
				))}
			</div>
			{Object.values(cart)
				.filter(item => item.quantity)
				.map(item => (
					<CheckoutItem key={item.id} item={item} />
				))}
			<span className="total">Total: {total} €</span>
		</div>
	);
};

export default Checkout;
