import React from 'react';
import {
	Grid,
	Card,
	CardContent,
	Typography,
	makeStyles,
} from '@material-ui/core';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import PeopleIcon from '@material-ui/icons/People';

const useStyles = makeStyles(theme => ({
	container: {
		padding: theme.spacing(15, 0),
		width: '100%',
		background: '#eee',
		margin: 0,
	},
	icon: {
		fontSize: '100px',
	},
	item: {
		maxWidth: '300px',
	},
	card: {
		height: '300px',
		textAlign: 'center',
	},
}));

const Features = () => {
	const classes = useStyles();

	return (
		<Grid container className={classes.container} justify="center" spacing={4}>
			<Grid item xs={6} className={classes.item}>
				<Card className={classes.card}>
					<CardContent>
						<SportsBasketballIcon color="primary" className={classes.icon} />
						<Typography variant="h5">Find Courts</Typography>
						<Typography variant="body1">
							Find basketball courts near you. Help the community by adding new court information.
						</Typography>
					</CardContent>
				</Card>
			</Grid>
			<Grid item xs={6} className={classes.item}>
				<Card className={classes.card}>
					<CardContent>
						<PeopleIcon color="primary" className={classes.icon} />
						<Typography variant="h5">Join The Community</Typography>
						<Typography variant="body1">
							Find other players in the community. Join pickup games near you.
						</Typography>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};

export default Features;
