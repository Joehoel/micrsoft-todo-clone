import React, { useEffect, useState } from "react";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./TodoList.css";
import { db } from "../firebase";
import TodoItem from "./TodoItem";
import NewTodo from "./NewTodo";
import { useStateValue } from "../contexts";

function TodoList({ name, id }) {
	const [todos, setTodos] = useState([]);
	const [{ user }] = useStateValue();

	const updateTodo = (id, completed) => {
		db.collection(`todos`).doc(id).update({
			completed: !completed,
		});
	};

	useEffect(() => {
		db.collection("todos").onSnapshot(snapshot => {
			const todos = snapshot.docs.map(doc => {
				return { id: doc.id, ...doc.data() };
			});

			setTodos(
				todos.filter(
					todo => todo.list.id === id && todo.uid === user.uid
				)
			);
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
						updateTo={() => updateTodo(todo.id, todo.completed)}
						text={todo?.text}
						completed={todo?.completed}
						key={todo?.id}
					/>
				))}
			</div>
			<NewTodo />
		</div>
	);
}

export default TodoList;
