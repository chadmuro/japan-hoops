import React, { useState } from 'react';
import { makeStyles, TextField, IconButton, Button, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
	root: {
		height: 'calc(100vh - 56px)',
		position: 'relative',
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		alignContent: 'center',
		padding: theme.spacing(4),
	},
	closeButton: {
		position: 'absolute',
		top: 2,
		right: 0,
	},
	button: {
		margin: theme.spacing(2, 0),
	},
}));

const AddCourt = () => {
	const classes = useStyles();
	const [name, setName] = useState('');
	const [mapSelector, setMapSelector] = useState(false);
	const [lat, setLat] = useState('');
	const [lng, setLng] = useState('');
	const [station, setStation] = useState('');
	const [inOut, setInOut] = useState('outdoor');
	const [numHoops, setnumHoops] = useState(1);

	return (
		<div className={classes.root}>
			<IconButton className={classes.closeButton}>
				<CloseIcon />
			</IconButton>
			<form className={classes.form}>
				<TextField label="Court Name" fullWidth />
				<Button>Select Map Location</Button>

				<TextField label="Closest Station" fullWidth />

				<RadioGroup row value={inOut} onChange={(e) => setInOut(e.target.value)}>
					<FormControlLabel
						value="outdoor"
						control={<Radio color="primary" size="small" />}
						label="Outdoor"
					/>
					<FormControlLabel
						value="indoor"
						control={<Radio color="primary" size="small" />}
						label="Indoor"
					/>
				</RadioGroup>

				<TextField label="Number of Hoops" fullWidth />
				<input
					accept="image/*"
					style={{ display: 'none' }}
					id="raised-button-file"
					type="file"
				/>
				<label htmlFor="raised-button-file">
					<Button
						variant="contained"
						color="primary"
						component="span"
						style={{ width: '100%' }}
						className={classes.button}
					>
						Upload Image
					</Button>
				</label>

				<Button
					type="submit"
					variant="contained"
					color="secondary"
					className={classes.button}
				>
					Submit
				</Button>
			</form>
		</div>
	);
};

export default AddCourt;
