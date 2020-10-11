import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { db } from "../firebase";

function NewList() {
	const addList = () => {
		const listName = prompt("List name:");
		if (listName.trim() === "") return;

		db.collection(`lists`).add({ name: listName, todos: [] });
	};

	return (
		<div className="sidebar__item new__list" onClick={() => addList()}>
			<AddIcon />
			<div className="sidebar__item__text">New List</div>
		</div>
	);
}

export default NewList;
