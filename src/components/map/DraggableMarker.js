import React, { useState, useMemo, useRef } from 'react';
import { Marker } from 'react-leaflet';

const DraggableMarker = ({ newLatLng, setNewLatLng }) => {

	const markerRef = useRef(null);
	const eventHandlers = useMemo(
		() => ({
			dragend() {
				const marker = markerRef.current;
				if (marker != null) {
					setNewLatLng(marker.getLatLng());
				}
			},
		}),
		[newLatLng]
	);

	return (
		<Marker
			draggable={true}
			eventHandlers={eventHandlers}
			position={newLatLng}
			ref={markerRef}
		></Marker>
	);
};

export default DraggableMarker;
