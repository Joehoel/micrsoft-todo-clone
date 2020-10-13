import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { db } from "../firebase";
import { useStateValue } from "../contexts";

function NewList() {
	const [{ user }] = useStateValue();

	const addList = () => {
		const listName = prompt("List name:");
		if (listName.trim() === "") return;

		db.collection(`lists`).add({ name: listName, uid: user.uid });
	};

	return (
		<div className="sidebar__item new__list" onClick={() => addList()}>
			<AddIcon />
			<div className="sidebar__item__text">New List</div>
		</div>
	);
}

export default NewList;
