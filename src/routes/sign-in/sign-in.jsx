import {
	signInWithGooglePopup,
	signInGoogleWithRedirect,
} from "../../utils/firebase.auth";
import { createUserDocFromAuth } from "../../utils/firebase.firestore";

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup(),
			userDocRef = await createUserDocFromAuth(user);
		console.log(userDocRef);
	};
	return (
		<>
			<div>Sign-in Page</div>
			<button onClick={logGoogleUser}>Sign in with Google</button>
		</>
	);
};

export default SignIn;
