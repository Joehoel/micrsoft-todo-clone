import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";
import { useStateValue } from "./contexts";
import { auth, db } from "./firebase";
import { SET_ACTIVE_LIST, SET_USER } from "./reducers";

function App() {
	const [{ user, activeList }, dispatch] = useStateValue();

	useEffect(() => {
		db.collection("lists").onSnapshot(snapshot => {
			// const lists = snapshot.docs.map(doc => {
			// 	return {
			// 		id: doc.id,
			// 		name: doc.data().name,
			// 	};
			// });
			dispatch({ type: SET_ACTIVE_LIST, activeList: null });
		});

		const unsubscribe = auth.onAuthStateChanged(authUser => {
			if (authUser) {
				dispatch({ type: SET_USER, user: authUser });
			} else {
				dispatch({ type: SET_USER, user: null });
			}
		});

		return () => {
			unsubscribe();
		};
	}, [dispatch]);

	return (
		<div className="app__container">
			{user ? (
				<>
					<Sidebar />
					{activeList && (
						<TodoList id={activeList?.id} name={activeList?.name} />
					)}
				</>
			) : (
				<Login />
			)}
		</div>
	);
}

export default App;
