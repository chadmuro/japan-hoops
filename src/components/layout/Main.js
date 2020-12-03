import React, { useState } from 'react';
import { Grid, Hidden } from '@material-ui/core';
import { connect } from 'react-redux';
import Map from '../map/Map';
import CourtList from '../courts/CourtList';
import AddCourt from '../courts/AddCourt';


const Main = ({ courts, displayAddCourt, setDisplayAddCourt }) => {
	const [mapSelector, setMapSelector] = useState(false);

	return (
		<Grid container>
			<Grid item xs={12} sm={6} md={7} lg={8} xl={9}>
				<Map mapSelector={mapSelector} courts={courts} />
			</Grid>
			{!displayAddCourt && (
				<Hidden xsDown>
					<Grid item sm={6} md={5} lg={4} xl={3}>
						<CourtList />
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
					/>
				</Grid>
			)}
		</Grid>
	);
};

const mapStateToProps = (state) => {
	return {
		courts: state.court.courts
	}
}

export default connect(mapStateToProps)(Main);
