export const getLocation = () => {
	return dispatch => {
		const geolocation = navigator.geolocation;
		geolocation.getCurrentPosition(
			position => {
				dispatch({
					type: 'GET_LOCATION',
					payload: position.coords,
				});
			},
			err => {
				dispatch({ type: 'GET_LOCATION_ERROR', err });
			}
		);
	};
};

export const setNewLocation = coords => {
	return dispatch => {
		dispatch({
			type: 'SET_LOCATION',
			payload: coords,
		});
	};
};
