import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { connect } from 'react-redux';
import MapMarker from './MapMarker';
import DraggableMarker from './DraggableMarker';

const Map = ({ courts, mapSelector, newLatLng, setNewLatLng, location }) => {
	return (
		<MapContainer
			center={[location.lat, location.lng]}
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
			{mapSelector && (
				<DraggableMarker newLatLng={newLatLng} setNewLatLng={setNewLatLng} />
			)}
			{courts &&
				courts.map(court => {
					return <MapMarker court={court} key={court.id} />;
				})}
		</MapContainer>
	);
};

const mapStateToProps = state => {
	return {
		location: state.location,
	};
};

export default connect(mapStateToProps)(Map);
