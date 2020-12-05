import React, { useState, useMemo, useRef } from 'react';
import { connect } from 'react-redux';
import { Marker } from 'react-leaflet';
import { setNewLocation } from '../../store/actions/locationActions';

const DraggableMarker = ({ newLocation, setNewLocation }) => {
	const markerRef = useRef(null);
	const eventHandlers = useMemo(
		() => ({
			dragend() {
				const marker = markerRef.current;
				console.log(marker.getLatLng());
				if (marker != null) {
					setNewLocation(marker.getLatLng());
				}
			},
		}),
		[newLocation, setNewLocation]
	);

	return (
		<Marker
			draggable={true}
			eventHandlers={eventHandlers}
			position={[newLocation.newLat, newLocation.newLng]}
			ref={markerRef}
		></Marker>
	);
};

const mapStateToProps = state => {
	return {
		newLocation: state.location,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setNewLocation: coords => dispatch(setNewLocation(coords)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DraggableMarker);
