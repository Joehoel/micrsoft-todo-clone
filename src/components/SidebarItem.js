import React from "react";
import { useStateValue } from "../contexts";
import { motion } from "framer-motion";

function SidebarItem({ text, Icon, ...rest }) {
	const [{ activeList }] = useStateValue();

	return (
		<motion.div
			whileTap={{ scale: 0.98 }}
			transition={{ duration: 0.3 }}
			className={`sidebar__item ${
				activeList?.name === text ? "active" : ""
			}`}
			{...rest}
		>
			<Icon />
			<div className="sidebar__item__text">{text}</div>
		</motion.div>
	);
}

export default SidebarItem;
