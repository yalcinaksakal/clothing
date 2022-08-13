import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "./auth.scss";

const Auth = () => {
	const { user } = useSelector(state => state.login);
	return user ? (
		<Navigate to="/" />
	) : (
		<div className="auth">
			<SignIn />
			<SignUp />
		</div>
	);
};

export default Auth;
