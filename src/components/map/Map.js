import React from 'react';
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup
} from 'react-leaflet';
import { makeStyles } from '@material-ui/core';

import DraggableMarker from './DraggableMarker';

const useStyles = makeStyles({});

const Map = ({ mapSelector }) => {
	return (
		<MapContainer
			center={[35.6804, 139.769]}
			zoom={13}
			style={{
				height: 'calc(100vh - 56px)',
				width: '100%',
			}}
			scrollWheelZoom={false}
		>
			<TileLayer
				attribution="Tiles &copy; Esri"
				url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
			/>
			{mapSelector && <DraggableMarker />}
			{/* <Marker position={[35.6804, 139.769]}>
				<Popup>
					Court Name <br /> Minato, Tokyo, Japan
				</Popup>
			</Marker> */}
		</MapContainer>
	);
};

export default Map;
