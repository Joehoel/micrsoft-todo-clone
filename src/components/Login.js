import { Button } from "@material-ui/core";
import React from "react";
import { useStateValue } from "../contexts";
import "./Login.css";

function Login() {
	const [{ login }] = useStateValue();

	return (
		<div className="login__container">
			<Button onClick={login} className="login__button">
				Sign in
			</Button>
		</div>
	);
}

export default Login;
