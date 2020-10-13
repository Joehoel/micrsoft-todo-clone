import { db } from "../firebase";

export const initialState = {
	user: null,
	activeList: null,
};

export const SET_USER = "SET_USER";
export const SET_ACTIVE_LIST = "SET_ACTIVE_LIST";
export const UPDATE_TODO = "UPDATE_TODO";

const reducer = (state, action) => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				user: action.user,
			};

		case SET_ACTIVE_LIST:
			return {
				...state,
				activeList: action.activeList,
			};

		case UPDATE_TODO:
			db.collection(`todos`).doc(action.id).update({
				completed: !action.completed,
			});
			return {
				...state,
			};

		default:
			return state;
	}
};

export default reducer;
