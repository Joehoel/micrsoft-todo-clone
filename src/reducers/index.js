export const initialState = {
	user: null,
	activeList: null,
};

export const SET_USER = "SET_USER";
export const SET_ACTIVE_LIST = "SET_ACTIVE_LIST";

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

		default:
			return state;
	}
};

export default reducer;
