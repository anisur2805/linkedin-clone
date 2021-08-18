import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { auth } from "../firebase";
import "./login.css";

function Login() {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [profilePic, petProfilePic] = useState("");

	const dispatch = useDispatch();

	const loginToApp = (e) => {
		e.preventDefault();
		console.log("Clicked", e.target);
		auth.signInWithEmailAndPassword(email, password)
			.then((userAuth) => {
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.uid,
						displayName: userAuth.displayName,
						photoUrl: userAuth.photoURL,
					})
				);
			})
			.catch((err) => console.log(err));
	};
	const register = () => {
		if (!name) {
			return alert("Enter your name");
		}

		auth.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				userAuth.user
					.updateProfile({
						displayName: name,
						photoURL: profilePic,
					})
					.then(() => {
						dispatch(
							login({
								email: userAuth.user.email,
								uid: userAuth.user.uid,
								displayName: name,
								photoURL: profilePic,
							})
						);
					});
			})
			.catch((error) => alert(error));
	};
	return (
		<div className="login">
			<img
				src="https://thetechjournal.com/wp-content/uploads/2013/06/linkedin.png"
				alt="LinkedIn Logo"
			/>
			<form>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Enter Full Name"
				/>
				<input
					value={profilePic}
					onChange={(e) => petProfilePic(e.target.value)}
					placeholder="Enter Photo URL (not required)"
				/>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Enter Email"
				/>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Enter Password"
				/>
				<button onClick={loginToApp}>Sign In</button>
				<p className="register__signup">
					New to LinkedIn? <span onClick={register}>Join now</span>
				</p>
			</form>
		</div>
	);
}

export default Login;
