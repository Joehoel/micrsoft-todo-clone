import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import firebase from "firebase";
import { db } from "../firebase";
import { useStateValue } from "../contexts";

function NewTodo() {
	const [{ activeList, user }] = useStateValue();
	const [clicked, setClicked] = useState();
	const [newTodo, setNewTodo] = useState();

	const handleSubmit = e => {
		e.preventDefault();
		setNewTodo("");

		db.collection("todos").add({
			completed: false,
			text: newTodo,
			list: db.collection("lists").doc(activeList.id),
			uid: user.uid,
			created: firebase.firestore.FieldValue.serverTimestamp(),
		});
	};

	const handleChange = e => {
		setNewTodo(e.target.value);
	};

	return (
		<div
			className="new-todo__container"
			onClick={() => {
				setClicked(true);
			}}
		>
			{clicked ? (
				<>
					<RadioButtonUncheckedIcon />
					<form onSubmit={handleSubmit}>
						<input
							className="new-todo__input"
							onChange={handleChange}
							value={newTodo}
							onBlur={() => setClicked(false)}
							autoFocus={true}
						/>
					</form>
				</>
			) : (
				<>
					<AddIcon />
					<div className="new-todo__text">Add Task</div>
				</>
			)}
		</div>
	);
}

export default NewTodo;
