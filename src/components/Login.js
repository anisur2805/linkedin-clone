import React from "react";
import "./login.css";

function Login() {
	const signIn = () => {};
	const register = () => {};
	return (
		<div className="login">
			<img
				src="https://thetechjournal.com/wp-content/uploads/2013/06/linkedin.png"
				alt="LinkedIn Logo"
			/>
			<from>
				<input placeholder="Enter Full Name" />
				<input placeholder="Enter Photo URL (not required)" />
				<input type="email" placeholder="Enter Email" />
				<input type="password" placeholder="Enter Password" />
				<button type="submit" onClick={signIn}>
					Sign In
				</button>
				<p className="register__signup">
					New to LinkedIn? <span onClick={register}>Join now</span>
				</p>
			</from>
		</div>
	);
}

export default Login;
