import React, { useState } from 'react';
import { Grid, Hidden } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import Map from '../map/Map';
import CourtList from '../courts/CourtList';
import AddCourt from '../courts/AddCourt';
import LoginSignup from '../auth/LoginSignup';

const Main = ({ courts, displayAddCourt, setDisplayAddCourt, displayLoginSignup, setDisplayLoginSignup }) => {
	const [mapSelector, setMapSelector] = useState(false);
	const [newLatLng, setNewLatLng] = useState({
		lat: 35.6804,
		lng: 139.769,
	});

	return (
		<>
			{displayLoginSignup && <LoginSignup displayLoginSignup={displayLoginSignup} setDisplayLoginSignup={setDisplayLoginSignup} />}
			<Grid container>
				<Grid item xs={12} sm={6} md={7} lg={8} xl={9}>
					<Map
						mapSelector={mapSelector}
						courts={courts}
						newLatLng={newLatLng}
						setNewLatLng={setNewLatLng}
					/>
				</Grid>
				{!displayAddCourt && (
					<Hidden xsDown>
						<Grid item sm={6} md={5} lg={4} xl={3}>
							<CourtList courts={courts} />
						</Grid>
					</Hidden>
				)}
				{displayAddCourt && (
					<Grid item xs={12} sm={6} md={5} lg={4} xl={3}>
						<AddCourt
							displayAddCourt={displayAddCourt}
							setDisplayAddCourt={setDisplayAddCourt}
							mapSelector={mapSelector}
							setMapSelector={setMapSelector}
							newLatLng={newLatLng}
						/>
					</Grid>
				)}
			</Grid>
		</>
	);
};

const mapStateToProps = state => {
	return {
		courts: state.firestore.ordered.courts,
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect([{ collection: 'courts' }])
)(Main);
