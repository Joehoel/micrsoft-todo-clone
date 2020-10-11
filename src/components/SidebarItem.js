import React from "react";

function SidebarItem({ text, Icon, ...rest }) {
	return (
		<div className="sidebar__item" {...rest}>
			<Icon />
			<div className="sidebar__item__text">{text}</div>
		</div>
	);
}

export default SidebarItem;
