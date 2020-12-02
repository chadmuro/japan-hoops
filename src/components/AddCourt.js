import React, { useState } from 'react';
import { makeStyles, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
		height: 'calc(100vh - 56px)',
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		minWidth: '250px',
		padding: theme.spacing(2),
	},
}));

const AddCourt = () => {
    const classes = useStyles();
    const [prefecture, setPrefecture] = useState('');

	return (
		<div className={classes.root}>
			<form className={classes.form}>
				<TextField label="Court Name" fullWidth />

				<TextField label="Prefecture" fullWidth />
				<TextField label="City" fullWidth />
				<TextField label="Closest Station" fullWidth />
				<TextField label="Indoor/Outdoor" fullWidth />
				<TextField label="Number of Hoops" fullWidth />
				<Button type="submit" variant="contained" color="secondary">
					Submit
				</Button>
			</form>
		</div>
	);
};

export default AddCourt;
