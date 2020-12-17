import React, { useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import CircularProgress from '@material-ui/core/CircularProgress';
import Map from '../map/Map';
import CourtList from '../courts/CourtList';
import AddCourt from '../courts/AddCourt';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: theme.spacing(5),
	},
}));

const Main = ({ courts, displayAddCourt, location, setDisplayAddCourt }) => {
	const [mapSelector, setMapSelector] = useState(false);
	const classes = useStyles();

	return location.loading ? (
		<div className={classes.root}>
			<CircularProgress size={100} color="secondary" />
		</div>
	) : (
		<>
			<Grid container className={classes.grid} id="main">
				<Grid item xs={12} sm={6} md={7} lg={8} xl={9}>
					<Map mapSelector={mapSelector} courts={courts} />
				</Grid>
				{!displayAddCourt && (
					<Grid item xs={12} sm={6} md={5} lg={4} xl={3}>
						<CourtList courts={courts} />
					</Grid>
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
		</>
	);
};

const mapStateToProps = state => {
	return {
		courts: state.firestore.ordered.courts,
		location: state.location,
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect([{ collection: 'courts' }])
)(Main);
