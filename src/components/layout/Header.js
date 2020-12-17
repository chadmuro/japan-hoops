import React from 'react';
import { Link } from 'react-scroll';
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
	titleText: {
		cursor: 'pointer',
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

	const handleClick = () => {
		setDisplayAddCourt(!displayAddCourt);
	};

	const links = auth.uid ? (
		<>
			<Button color="inherit">
				<Link
					to="main"
					spy={true}
					smooth={true}
					offset={-56}
					onClick={handleClick}
				>
					{displayAddCourt ? 'Show Courts' : 'Add Court'}
				</Link>
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
		<AppBar position="sticky">
			<Toolbar>
				<Typography variant="h6" className={classes.title}>
					<Link
						to="home"
						spy={true}
						smooth={true}
						offset={-56}
						className={classes.titleText}
					>
						Japan Hoops
					</Link>
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
		showLoginSignup: show => dispatch(showLoginSignup(show)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
