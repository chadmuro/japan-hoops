export const getLocation = () => {
	return dispatch => {
		const geolocation = navigator.geolocation;
		geolocation.getCurrentPosition(
			position => {
				console.log(position.coords);
				dispatch({
					type: 'GET_LOCATION',
					payload: position.coords,
				});
			},
			err => {
				console.log(err);
				dispatch({ type: 'GET_LOCATION_ERROR', err });
			}
		);
	};
};
