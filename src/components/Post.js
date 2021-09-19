import { Avatar } from "@material-ui/core";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice.js";
import InputOption from "./InputOption";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
	const user = useSelector(selectUser);
	return (
		<div ref={ref} className="post">
			<div className="post__header">
				{user !== undefined && (
					<Avatar src={photoUrl}>{user.email[0]}</Avatar>
				)}
				<div className="post__info">
					<h2>{name}</h2>
					{/* <h2>{user.email}</h2> */}
					<p>{description}</p>
				</div>
			</div>

			<div className="post__body">{message}</div>

			<div className="post__buttons">
				<InputOption
					Icon={ThumbUpOutlinedIcon}
					title="Like"
					color="gray"
				/>
				<InputOption
					Icon={ChatOutlinedIcon}
					title="Comment"
					color="gray"
				/>
				<InputOption
					Icon={ShareOutlinedIcon}
					title="Share"
					color="gray"
				/>
				<InputOption
					Icon={SendOutlinedIcon}
					title="Send"
					color="gray"
				/>
			</div>
		</div>
	);
});

export default Post;
