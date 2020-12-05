const initState = {
	lat: 35.6804,
	lng: 139.769,
	locError: null,
	loading: true,
	newLat: 35.6804,
	newLng: 139.769,
};

const locationReducer = (state = initState, action) => {
	switch (action.type) {
		case 'GET_LOCATION':
			return {
                lat: action.payload.latitude,
                lng: action.payload.longitude,
                newLat: action.payload.latitude,
                newLng: action.payload.longitude,
                locError: null,
                loading: false
            }
		case 'GET_LOCATION_ERROR':
			return {
                ...state,
                locError: 'Please allow location services',
                loading: false
            }
        case 'SET_LOCATION':
            return {
                ...state,
                newLat: action.payload.lat,
                newLng: action.payload.lng
            }
		default:
			return state;
	}
};

export default locationReducer;
