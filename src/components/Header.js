import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import logo from "../logo.png";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import NotificationIcon from "@material-ui/icons/Notifications";
import ChatIcon from "@material-ui/icons/Chat";
import { logout } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";

function Header() {
	const dispatch = useDispatch();
	const logOfOut = () => {
		dispatch(logout());
    auth.signOut();
	};
	return (
		<div className="header">
			<div className="header__left">
				<img src={logo} alt="Logo" />
				<div className="header__search">
					<SearchIcon />
					<input placeholder="Search here..." />
				</div>
			</div>
			<div className="header__right">
				<HeaderOption title="Home" Icon={HomeIcon}></HeaderOption>
				<HeaderOption
					title="My Network"
					Icon={SupervisedUserCircleIcon}></HeaderOption>
				<HeaderOption title="Messaging" Icon={ChatIcon}></HeaderOption>
				<HeaderOption
					title="Notification"
					Icon={NotificationIcon}></HeaderOption>
				<HeaderOption
					onClick={logOfOut}
					title="Me"
          avatar={true}
				  // avatar="https://media-exp1.licdn.com/dms/image/C5103AQExs31ZUfBz8g/profile-displayphoto-shrink_100_100/0/1561810463192?e=1632960000&v=beta&t=mP5kRDomPl1G1gsM7AL4LtQ_KjT-3LVcFOUoyYdJpoA"
          >
        </HeaderOption>
			</div>
		</div>
	);
}

export default Header;
