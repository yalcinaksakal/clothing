import "./checkout.scss";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import Button from "../../components/button/button";
import { useNavigate } from "react-router-dom";

const headers = ["Product", "Description", "Quantity", "Price", "Remove"];
const Checkout = () => {
	const { cart, total } = useSelector(state => state.cart),
		navigate = useNavigate(),
		navigator = () => {
			navigate("/");
		};
	return total ? (
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
	) : (
		<div className="checkout-container">
			<p>Your cart is empty.</p>
			<Button buttonType="inverted" onClick={navigator}>
				Home
			</Button>
		</div>
	);
};

export default Checkout;
