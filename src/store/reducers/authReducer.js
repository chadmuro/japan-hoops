const initState = {
	authError: null,
	loginSignup: null
};

const authReducer = (state = initState, action) => {
	switch(action.type) {
		case 'LOGIN_ERROR':
			console.log('Login error');
			return {
				...state,
				authError: action.err.message
			}
		case 'LOGIN_SUCCESS':
			console.log('Login success');
			return {
				...state,
				authError: null,
				loginSignup: null,
			}
		case 'LOGOUT_SUCCESS':
			console.log('Logout success');
			return state;
		case 'SIGNUP_SUCCESS':
			console.log('Signup success');
			return {
				...state,
				authError: null,
				loginSignup: null
			}
		case 'SIGNUP_ERROR':
			console.log('Signup error');
			return {
				...state,
				authError: action.err.message
			}
		case 'SHOW_LOGIN_SIGNUP':
			console.log('display changed');
			return {
				...state,
				loginSignup: action.payload,
				authError: null
			}
		default:
			return state;
	}
};

export default authReducer;
