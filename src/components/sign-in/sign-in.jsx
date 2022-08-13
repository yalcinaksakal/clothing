import { useState } from "react";
import { signIn } from "../../utils/firebase.auth";

import Button from "../button/button";
import FormInput from "../form-input/form-input";
import "./sign-in.scss";
import {
	signInWithGooglePopup,
	signInGoogleWithRedirect,
} from "../../utils/firebase.auth";
// import { getRedirectResult } from "firebase/auth";

const signUpData = { email: "", pwd: "" };

const SignIn = () => {
	const [data, setData] = useState(signUpData),
		[err, setErr] = useState(""),
		{ email, pwd } = data,
		submitHandler = async event => {
			event.preventDefault();
			try {
				await signIn(email, pwd);
				setData(signUpData);
			} catch (err) {
				setErr("Wrong Password or Email");
				setTimeout(() => {
					setErr("");
				}, 2500);
			}
		},
		changeHandler = event => {
			const { name, value } = event.target;
			setData(prev => ({ ...prev, [name]: value }));
		};

	// useEffect(() => {
	// 	const getUser = async () => {
	// 		const response = await getRedirectResult(auth);
	// 		if (response) {
	// 			const userDocref = await createUserDocFromAuth(response.user);
	// 		}
	// 	};
	// 	getUser();
	// }, []);

	return (
		<div className="sign-up-container">
			<h2>Already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={submitHandler}>
				<FormInput
					label="Email"
					type="email"
					required
					name="email"
					onChange={changeHandler}
					value={email}
				/>
				<FormInput
					label="Password"
					type="password"
					required
					name="pwd"
					onChange={changeHandler}
					value={pwd}
				/>
				<div className="buttons-container ">
					<Button type="submit">Sign In</Button>
					<Button
						type="button"
						buttonType="google"
						onClick={signInWithGooglePopup}
					>
						Google sign in{" "}
					</Button>
				</div>
			</form>
			<br></br>
			<Button
				type="button"
				buttonType="google"
				onClick={signInGoogleWithRedirect}
			>
				Google redirect
			</Button>
			<h2 style={{ color: "red" }}>{err}</h2>
		</div>
	);
};
export default SignIn;
