import React, { useEffect, useState } from "react";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./TodoList.css";
import { db } from "../firebase";
import TodoItem from "./TodoItem";

function TodoList({ name, id }) {
	const [todos, setTodos] = useState([]);

	const updateTodo = (id, completed) => {
		// db.collection(`lists`)
		// 	.doc(id)
		// 	.update({
	};

	useEffect(() => {
		db.collection(`lists`)
			.doc(id)
			.onSnapshot(doc => {
				setTodos(doc.data().todos);
			});
	}, [id]);

	return (
		<div className="todo-list">
			<div className="todo-list__header">
				<div className="header__title">
					<h1>{name}</h1>
				</div>
				<div className="header__icons">
					<PersonAddIcon />
					<MoreHorizIcon />
				</div>
			</div>
			<div className="todo-list__container">
				{todos?.map((todo, i) => (
					<TodoItem
						onClick={() => updateTodo(todo.id, todo.completed)}
						text={todo.text}
						completed={todo.completed}
						key={`todo-${i}`}
					/>
				))}
			</div>
		</div>
	);
}

export default TodoList;
