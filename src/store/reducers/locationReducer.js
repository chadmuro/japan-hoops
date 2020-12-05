const initState = {
	lat: 35.6804,
    lng: 139.769,
    locError: null,
    loading: true
};

const locationReducer = (state = initState, action) => {
	switch (action.type) {
		case 'GET_LOCATION':
			console.log('geolocation rendered', action.payload);
			return {
                lat: action.payload.latitude,
                lng: action.payload.longitude,
                locError: null,
                loading: false
            }
		case 'GET_LOCATION_ERROR':
			console.log('geolocation error', action.err);
			return {
                ...state,
                locError: 'Please allow location services',
                loading: false
            }
		default:
			return state;
	}
};

export default locationReducer;
