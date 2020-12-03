import { TrainRounded } from '@material-ui/icons';
import React, { useState, useMemo, useRef, useCallback } from 'react';
import { Marker, Popup } from 'react-leaflet';

const DraggableMarker = () => {
	const [draggable, setDraggable] = useState(true);
	const [position, setPosition] = useState([35.6804, 139.769]);
	const markerRef = useRef(null);
	const eventHandlers = useMemo(
		() => ({
			dragend() {
				const marker = markerRef.current;
				if (marker != null) {
					setPosition(marker.getLatLng());
				}
			},
		}),
		[]
	);
	const toggleDraggable = useCallback(() => {
		setDraggable(d => !d);
    }, []);
    
    console.log(position);

	return (
		<Marker
			draggable={draggable}
			eventHandlers={eventHandlers}
			position={position}
			ref={markerRef}
		>
			<Popup minWidth={90}>
				<span onClick={toggleDraggable}>
					{draggable
						? 'Marker is draggable'
						: 'Click to make marker draggable'}
				</span>
			</Popup>
		</Marker>
	);
};

export default DraggableMarker;