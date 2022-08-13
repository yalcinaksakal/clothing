import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./nav.scss";
import { useSelector } from "react-redux";
import { signOutUser } from "../../utils/firebase.auth";

const Navigation = () => {
	const { user } = useSelector(state => state.login);
	console.log(user);
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
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
