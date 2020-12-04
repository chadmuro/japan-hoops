export const logIn = credentials => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();

		firebase
			.auth()
			.signInWithEmailAndPassword(credentials.email, credentials.password)
			.then(() => {
				dispatch({ type: 'LOGIN_SUCCESS' });
			})
			.catch(err => {
				dispatch({ type: 'LOGIN_ERROR', err });
			});
	};
};

export const logOut = () => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();

		firebase
			.auth()
			.signOut()
			.then(() => {
				dispatch({ type: 'LOGOUT_SUCCESS' });
			});
	};
};

export const signUp = newUser => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();

		firebase
			.auth()
			.createUserWithEmailAndPassword(newUser.email, newUser.password)
			.then(() => {
				dispatch({ type: 'SIGNUP_SUCCESS' });
			})
			.catch(err => {
				dispatch({ type: 'SIGNUP_ERROR', err });
			});
	};
};

export const showLoginSignup = show => {
	return dispatch => {
		dispatch({
			type: 'SHOW_LOGIN_SIGNUP',
			payload: show,
		});
	};
};
