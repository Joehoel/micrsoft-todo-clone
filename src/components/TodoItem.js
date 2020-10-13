import React from "react";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import { motion } from "framer-motion";
import { useStateValue } from "../contexts";
import { UPDATE_TODO } from "../reducers";
import PropTypes from "prop-types";

function TodoItem({ text, completed, id }) {
	const [{}, dispatch] = useStateValue();

	return (
		<motion.div
			className="todo-list__item"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			onClick={() =>
				dispatch({
					type: UPDATE_TODO,
					id: id,
					completed: completed,
				})
			}
		>
			{completed ? (
				<RadioButtonCheckedIcon />
			) : (
				<RadioButtonUncheckedIcon />
			)}
			<div className="todo-list__item__text">{text}</div>
		</motion.div>
	);
}

TodoItem.propTypes = {
	completed: PropTypes.bool,
	id: PropTypes.string,
	text: PropTypes.string,
};

export default TodoItem;
