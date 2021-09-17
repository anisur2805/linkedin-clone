import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./HeaderOption.css";

const HeaderOption = ({ Icon, title, avatar, onClick }) => {
	const user = useSelector(selectUser);
	// console.log(user);
	return (
		<div onClick={onClick} className="header__option">
			{Icon && <Icon className="" />}
			{avatar && (
				<Avatar src={user?.photoUrl} className="header__avatarClass">
					{user.email ? user.email[0] : 'A' }
				</Avatar>
			)}
			<h3>{title}</h3>
		</div>
	);
};

export default HeaderOption;