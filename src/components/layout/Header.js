import React from 'react';
import { connect } from 'react-redux';
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	makeStyles,
} from '@material-ui/core';
import { logOut, showLoginSignup } from '../../store/actions/authActions';

const useStyles = makeStyles({
	title: {
		flexGrow: 1,
	},
});

const Header = ({
	displayAddCourt,
	setDisplayAddCourt,
	showLoginSignup,
	logOut,
	auth,
}) => {
	const classes = useStyles();

	const links = auth.uid ? (
		<>
			<Button
				color="inherit"
				onClick={() => setDisplayAddCourt(!displayAddCourt)}
			>
				{displayAddCourt ? 'Show Courts' : 'Add Court'}
			</Button>
			<Button color="inherit" onClick={logOut}>
				Logout
			</Button>
		</>
	) : (
		<>
			<Button color="inherit" onClick={() => showLoginSignup('login')}>
				Login
			</Button>
			<Button color="inherit" onClick={() => showLoginSignup('signup')}>
				Sign up
			</Button>
		</>
	);

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" className={classes.title}>
					Japan Hoops
				</Typography>
				{auth.isLoaded && links}
			</Toolbar>
		</AppBar>
	);
};

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		logOut: () => dispatch(logOut()),
		showLoginSignup: (show) => dispatch(showLoginSignup(show))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
