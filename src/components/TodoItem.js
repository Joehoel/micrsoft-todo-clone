import React from "react";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

function TodoItem({ text, completed, ...rest }) {
	return (
		<div className="todo-list__item" {...rest}>
			{completed ? (
				<RadioButtonCheckedIcon />
			) : (
				<RadioButtonUncheckedIcon />
			)}
			<div className="todo-list__item__text">{text}</div>
		</div>
	);
}

export default TodoItem;
