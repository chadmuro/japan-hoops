const initState = {
	authError: null,
	loginSignup: null,
};

const authReducer = (state = initState, action) => {
	switch (action.type) {
		case 'LOGIN_ERROR':
			return {
				...state,
				authError: action.err.message,
			};
		case 'LOGIN_SUCCESS':
			return {
				...state,
				authError: null,
				loginSignup: null,
			};
		case 'LOGOUT_SUCCESS':
			return state;
		case 'SIGNUP_SUCCESS':
			return {
				...state,
				authError: null,
				loginSignup: null,
			};
		case 'SIGNUP_ERROR':
			return {
				...state,
				authError: action.err.message,
			};
		case 'SHOW_LOGIN_SIGNUP':
			return {
				...state,
				loginSignup: action.payload,
				authError: null,
			};
		default:
			return state;
	}
};

export default authReducer;
