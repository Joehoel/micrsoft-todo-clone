import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { db } from "../firebase";
import { useStateValue } from "../contexts";

function NewTodo() {
	const [{ activeList, user }] = useStateValue();

	return (
		<div
			className="new-todo__container"
			onClick={() => {
				db.collection("todos").add({
					completed: false,
					text: "test todo",
					uid: user.uid,
					list: db.collection("lists").doc(activeList.id),
				});
			}}
		>
			<AddIcon />
			<div className="new-todo__text">Add Task</div>
		</div>
	);
}

export default NewTodo;
