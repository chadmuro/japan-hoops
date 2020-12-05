import { Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import basketball from '../../basketball.png';

const MapMarker = ({ court }) => {
	const icon = new Icon({
		iconUrl: basketball,
		iconSize: [25, 25],
	});

	return (
		<Marker position={[court.lat, court.lng]} icon={icon}>
			<Popup>
				{court.name} <br /> Minato, Tokyo, Japan
			</Popup>
		</Marker>
	);
};

export default MapMarker;
