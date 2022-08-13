import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./nav.scss";
import { useSelector } from "react-redux";
import { signOutUser } from "../../utils/firebase.auth";
import CartIcon from "../../components/cart-icon/cartIcon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import { useState } from "react";

const Navigation = () => {
	const { user } = useSelector(state => state.login),
		[isCartVis, setIsCartVis] = useState(false),
		toogleCartVisibility = () => setIsCartVis(prev => !prev);
	return (
		<>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<Logo className="logo">Logo</Logo>
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						SHOP
					</Link>

					{user ? (
						<span className="nav-link" onClick={signOutUser}>
							SIGN OUT
						</span>
					) : (
						<Link className="nav-link" to="/auth">
							SIGN IN
						</Link>
					)}
					<CartIcon toogleCartVisibility={toogleCartVisibility} />
				</div>
			</div>
			{isCartVis && (
				<CartDropdown toogleCartVisibility={toogleCartVisibility} />
			)}
			<Outlet />
		</>
	);
};

export default Navigation;
