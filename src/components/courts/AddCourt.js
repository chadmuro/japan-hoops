import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
	makeStyles,
	TextField,
	IconButton,
	Button,
	RadioGroup,
	Radio,
	FormControlLabel,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { addCourt } from '../../store/actions/courtActions';

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

const AddCourt = ({ mapSelector, setMapSelector, displayAddCourt, setDisplayAddCourt, newLatLng, addCourt }) => {
	const classes = useStyles();
	const [name, setName] = useState('');
	const [station, setStation] = useState('');
	const [inOut, setInOut] = useState('outdoor');
	const [numHoops, setNumHoops] = useState(1);

	const setLatLng = () => {
		setMapSelector(!mapSelector);
	}

	const handleClose = () => {
		setDisplayAddCourt(!displayAddCourt);
		setMapSelector(false);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		const newCourt = {
			name,
			lat: newLatLng.lat,
			lng: newLatLng.lng,
			station,
			inOut,
			numHoops
		}

		addCourt(newCourt);
		setName('');
		setStation('');
		setInOut('outdoor');
		setNumHoops(1);
		setDisplayAddCourt(!displayAddCourt);
	}

	return (
		<div className={classes.root}>
			<IconButton className={classes.closeButton} onClick={handleClose}>
				<CloseIcon />
			</IconButton>
			<form className={classes.form} onSubmit={handleSubmit}>
				<TextField
					label="Court Name"
					fullWidth
					value={name}
					onChange={e => setName(e.target.value)}
				/>
				<Button onClick={setLatLng}>
					{mapSelector
						? 'Drag Marker to Court Location'
						: 'Select Map Location'}
				</Button>

				<TextField
					label="Closest Station"
					fullWidth
					value={station}
					onChange={e => setStation(e.target.value)}
				/>

				<RadioGroup row value={inOut} onChange={e => setInOut(e.target.value)}>
					<FormControlLabel
						value="Outdoor"
						control={<Radio color="primary" size="small" />}
						label="Outdoor"
					/>
					<FormControlLabel
						value="Indoor"
						control={<Radio color="primary" size="small" />}
						label="Indoor"
					/>
				</RadioGroup>

				<TextField
					label="Number of Hoops"
					type="number"
					fullWidth
					value={numHoops}
					onChange={e => setNumHoops(e.target.value)}
				/>
				{/* <input
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
				</label> */}

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

const mapDispatchToProps = (dispatch) => {
	return {
		addCourt: (court) => dispatch(addCourt(court))
	}
}

export default connect(null, mapDispatchToProps)(AddCourt);
