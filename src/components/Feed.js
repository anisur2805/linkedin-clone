import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import CreateIcon from "@material-ui/icons/Create";
import EventNoteIcon from "@material-ui/icons/EventNote";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import firebase from "firebase";
import React, { useEffect, useState } from "react";
import FlipMove from "react-flip-move";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { db } from "../firebase.js";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";

/*
* TODO:
* 
*/
function Feed() {
	const [posts, setPosts] = useState([]);
	const [input, setInput] = useState("");
	
	const user = useSelector(selectUser);

	useEffect(() => {
		db.collection("posts")
			.orderBy("timeStamp", "desc")
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

		db.collection("posts")
			.add({
				name: user.displayName,
				description: user.email,
				message: input,
				photoUrl: user.photoUrl || '',
				timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
			})
			.then(() => {
				console.log("Successful");
			})
			.catch((err) => {
				console.log("Error ", err);
			});

		setInput("");
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
							placeholder="Whats on your mind..."
						/>
						<button type="submit" onClick={sendPost} />
					</form>
				</div>

				<div className="feed__inputOptions">
					<InputOption
						Icon={ImageIcon}
						title="Photo"
						color="#70B5F9"
					/>
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
			</div>

			<FlipMove>
				{posts.map(
					({
						id,
						data: { name, description, message, photoUrl },
					}) => (
						<Post
							key={id}
							name={name}
							description={description}
							message={message}
							photoUrl={photoUrl}
						/>
					)
				)}
			</FlipMove>
		</div>
	);
}

export default Feed;
