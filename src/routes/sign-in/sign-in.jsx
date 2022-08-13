import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import SignUp from "../../components/sign-up/sign-up";
import {
	signInWithGooglePopup,
	signInGoogleWithRedirect,
	auth,
} from "../../utils/firebase.auth";
import { createUserDocFromAuth } from "../../utils/firebase.firestore";

const SignIn = () => {
	useEffect(() => {
		const getUser = async () => {
			const response = await getRedirectResult(auth);
			if (response) {
				const userDocref = await createUserDocFromAuth(response.user);
			}
		};
		getUser();
	}, []);

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup(),
			userDocRef = await createUserDocFromAuth(user);
		console.log(userDocRef);
	};

	return (
		<>
			<div>Sign-in Page</div>
			<button onClick={logGoogleUser}>Sign in with Google</button>
			<button onClick={signInGoogleWithRedirect}>
				Sign in with Google Redirect
			</button>
			<SignUp />
		</>
	);
};

export default SignIn;
