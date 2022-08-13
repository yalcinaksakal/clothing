import { useState } from "react";
import { createUserEmailAndPwd } from "../../utils/firebase.auth";
import { createUserDocFromAuth } from "../../utils/firebase.firestore";
import FormInput from "../form-input/form-input";
const signUpData = { email: "", name: "", pwd: "", pwd2: "" };

const SignUp = () => {
	const [data, setData] = useState(signUpData),
		{ email, name, pwd, pwd2 } = data,
		submitHandler = async event => {
			event.preventDefault();
			if (pwd !== pwd2) return;
			try {
				const { user } = await createUserEmailAndPwd(email, pwd);
				await createUserDocFromAuth(user, { displayName: name });
				setData(signUpData);
			} catch (err) {
				console.log(err.message);
			}
		},
		changeHandler = event => {
			const { name, value } = event.target;
			setData(prev => ({ ...prev, [name]: value }));
		};
	return (
		<div>
			<h1>Sign up With your email</h1>
			<form onSubmit={submitHandler}>
				<FormInput
					label="Display Name"
					type="text"
					required
					name="name"
					onChange={changeHandler}
					value={name}
				/>
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
				<FormInput
					label="Confirm Password "
					type="password"
					required
					name="pwd2"
					onChange={changeHandler}
					value={pwd2}
				/>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};
export default SignUp;
