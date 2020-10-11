import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";

function SidebarUser({ displayName, email, photoURL }) {
	return (
		<div className="sidebar__user">
			<Avatar src={photoURL} />
			<div className="sidebar__user__info">
				<span className="name">{displayName}</span>
				<span className="email">{email}</span>
			</div>
			<div className="sidebar__user__search">
				<SearchIcon />
			</div>
		</div>
	);
}

export default SidebarUser;
