const initState = {};

const courtReducer = (state = initState, action) => {
	switch (action.type) {
		case 'ADD_COURT':
			return state;
		case 'ADD_COURT_ERROR':
			return state;
		default:
			return state;
	}
};

export default courtReducer;
