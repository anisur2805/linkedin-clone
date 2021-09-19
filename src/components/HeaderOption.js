import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./HeaderOption.css";

const HeaderOption = ({ title,Icon, avatar, onClick }) => {
	const user = useSelector(selectUser);
	return (
		<div onClick={onClick} className="header__option">
			{Icon && <Icon className="" />}
			{avatar !== undefined && (
				<Avatar src={user?.photoUrl} className="header__avatarClass">
					{user && user.email !== undefined ? user.email[0] : ''}
				</Avatar>
			)}
			<h3>{title}</h3>
		</div>
	);
};

export default HeaderOption;