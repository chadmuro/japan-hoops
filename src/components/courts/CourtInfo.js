import React from 'react';
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	image: {
		width: 150,
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
	},
});

const CourtInfo = ({ court }) => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<div className={classes.details}>
				<CardContent>
					<Typography component="h5" variant="h6" color="primary">
						{court.name}
					</Typography>
					<Typography variant="body1" color="secondary">
						Closest Station: {court.station}
					</Typography>
					<Typography variant="body2">
						Number of Hoops: {court.numHoops}
					</Typography>
					<Typography variant="body2">{court.inOut}</Typography>
				</CardContent>
			</div>
			{/* <CardMedia
				className={classes.image}
				image="https://www.courtsoftheworld.com/upload/courts/91/1/COTW-yoyogi-park-1589365723.jpg"
				title="Live from space album cover"
			/> */}
		</Card>
	);
};

export default CourtInfo;
