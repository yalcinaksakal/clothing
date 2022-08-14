import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginActions } from "../../store/login-slice";
import {
	createUserDocFromAuth,
	createUserEmailAndPwd,
} from "../../utils/firebase.auth";
import Button from "../button/button";
import FormInput from "../form-input/form-input";
import "./sign-up.scss";

const signUpData = { email: "", name: "", pwd: "", pwd2: "" };

const SignUp = () => {
	const [data, setData] = useState(signUpData),
		[err, setErr] = useState(false),
		dispatch = useDispatch(),
		errHandler = err => {
			setErr(err);
			setTimeout(() => {
				setErr("");
			}, 2500);
		},
		{ email, name, pwd, pwd2 } = data,
		submitHandler = async event => {
			event.preventDefault();
			if (pwd !== pwd2) {
				errHandler("Passwords don't match");
				return;
			}
			try {
				const { user } = await createUserEmailAndPwd(email, pwd);
				dispatch(
					loginActions.setUser(
						await createUserDocFromAuth({ ...user, displayName: name })
					)
				);
				setData(signUpData);
			} catch (err) {
				errHandler(err.message);
			}
		},
		changeHandler = event => {
			const { name, value } = event.target;
			setData(prev => ({ ...prev, [name]: value }));
		};
	return (
		<div className="sign-up-container">
			<h2>Don't have an account</h2>
			<span>Sign up with your email</span>
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
				<Button type="submit">Sign Up</Button>
			</form>
			<h2 style={{ color: "red" }}>{err}</h2>
		</div>
	);
};
export default SignUp;
