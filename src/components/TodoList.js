import React, { useEffect, useState } from "react";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./TodoList.css";
import { db } from "../firebase";
import TodoItem from "./TodoItem";
import NewTodo from "./NewTodo";
import { useStateValue } from "../contexts";
import { UPDATE_TODO } from "../reducers";

function TodoList({ name, id }) {
	const [todos, setTodos] = useState([]);
	const [{ user }, dispatch] = useStateValue();

	useEffect(() => {
		db.collection("todos")
			.orderBy("created", "desc")
			.where("uid", "==", user.uid)
			.where("list", "==", db.doc(`lists/${id}`))
			.onSnapshot(snapshot => {
				const todos = snapshot.docs.map(doc => {
					return { id: doc.id, ...doc.data() };
				});

				setTodos(todos);
			});
	}, [id, user.uid]);

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
				{todos?.map(todo => (
					<TodoItem
						text={todo?.text}
						completed={todo?.completed}
						key={todo?.id}
						id={todo?.id}
					/>
				))}
			</div>
			<NewTodo />
		</div>
	);
}

export default TodoList;
