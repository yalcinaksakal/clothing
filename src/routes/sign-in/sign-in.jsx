import {
	signInWithGooglePopup,
	signInGoogleWithRedirect,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
	const logGoogleUser = async () => {
		const response = await signInWithGooglePopup();
		console.log(response);
	};
	return (
		<>
			<div>Sign-in Page</div>
			<button onClick={logGoogleUser}>Sign in with Google</button>
		</>
	);
};

export default SignIn;
