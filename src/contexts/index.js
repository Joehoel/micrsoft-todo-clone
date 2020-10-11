import React, { useContext, createContext, useReducer } from "react";
import { auth, provider } from "../firebase";
import reducer, { initialState } from "../reducers";

const StateContext = createContext();

export function useStateValue() {
	return useContext(StateContext);
}

export function StateProvider({ children }) {
	// const [currentUser, setCurrentUser] = useState();
	// const [loading, setLoading] = useState(true);

	function login(email, password) {
		return auth.signInWithPopup(provider);
	}

	function logout() {
		return auth.signOut();
	}

	// useEffect(() => {
	// 	const unsubscribe = auth.onAuthStateChanged(user => {
	// 		setLoading(false);
	// 	});

	// 	return unsubscribe;
	// }, []);

	const value = {
		login,
		logout,
	};

	return (
		<StateContext.Provider
			value={useReducer(reducer, { ...initialState, ...value })}
		>
			{children}
		</StateContext.Provider>
	);
}
