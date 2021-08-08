import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { db } from "../firebase.js";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";

import "./Feed.css"

function Feed() {
	const [posts, setPosts] = useState([]);
	const [input, setInput] = useState("");

	useEffect(() => {
		db.collection("posts")
			.onSnapshot((snapshot) =>
				setPosts(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				)
			);
	}, []);

	const sendPost = (e) => {
		e.preventDefault();

		db.collection("posts").add({
			name: "Anisur Rahman",
			description: "this is a test",
			message: input,
			photoUrl: "",
			timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
		})
		.then(() => {
			console.log("Successful")
		})
		.catch((err) => {
			console.log("Error ", err)
		});

		setInput("");
		// console.log("posts", posts);
		console.log( typeof posts );
	};
	return (
		<div className="feed">
			<div className="feed__inputContainer">
				<div className="feed__input">
					<CreateIcon />
					<form>
						<input
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
						<button type="submit" onClick={sendPost} />
					</form>
				</div>
			</div>

			<div className="feed__inputOptions">
				<InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
				<InputOption
					Icon={SubscriptionsIcon}
					title="Video"
					color="#70B5F9"
				/>
				<InputOption
					Icon={EventNoteIcon}
					title="Event"
					color="#70B5F9"
				/>
				<InputOption
					Icon={CalendarViewDayIcon}
					title="Write Article"
					color="#70B5F9"
				/>
			</div>

			{posts.map(
				({ id, data: { name, description, message, photoUrl } }) => (
					<Post
						key={id}
						name={name}
						description={description}
						message={message}
						photoUrl={photoUrl}
					/>
				)
			)}
		</div>
	);
}

export default Feed;
