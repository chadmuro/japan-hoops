export const addCourt = court => {
	return (dispatch, getState, { getFirestore }) => {
		const firestore = getFirestore();
		firestore
			.collection('courts')
			.add({
				...court,
			})
			.then(() => {
				dispatch({ type: 'ADD_COURT', court });
			})
			.catch(err => {
				dispatch({ type: 'ADD_COURT_ERROR', err });
			});
	};
};
