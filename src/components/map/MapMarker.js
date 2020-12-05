import { Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { Typography } from '@material-ui/core';
import basketball from '../../basketball.png';

const MapMarker = ({ court }) => {
	const icon = new Icon({
		iconUrl: basketball,
		iconSize: [25, 25],
	});

	return (
		<Marker position={[court.lat, court.lng]} icon={icon}>
			<Popup>
				<Typography align="center" color="primary" variant="h6" style={{ marginBottom: 0 }}>
					{court.name}
				</Typography>
				<Typography align="center" color="secondary" variant="body1" style={{ marginTop: 0 }}>
					Closest Station: {court.station}
				</Typography>
			</Popup>
		</Marker>
	);
};

export default MapMarker;
