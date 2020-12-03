import { Marker, Popup } from 'react-leaflet';

const MapMarker = ({court}) => {
	return (
		<Marker position={[court.lat, court.lng]}>
			<Popup>
				{court.name} <br /> Minato, Tokyo, Japan
			</Popup>
		</Marker>
	);
}

export default MapMarker;
