import React from 'react';
import { connect } from 'react-redux';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import { logOut } from '../../store/actions/authActions';

const useStyles = makeStyles({
    title: {
        flexGrow: 1
    }
})

const Header = ({ displayAddCourt, setDisplayAddCourt, setDisplayLoginSignup, logOut }) => {
    const classes = useStyles();

    return (
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						Japan Hoops
					</Typography>
					<Button
						color="inherit"
						onClick={() => setDisplayAddCourt(!displayAddCourt)}
					>
						{displayAddCourt ? 'Show Courts' : 'Add Court'}
					</Button>
					<Button color="inherit" onClick={logOut}>Logout</Button>
					<Button color="inherit" onClick={() => setDisplayLoginSignup('login')}>Login</Button>
					<Button color="inherit" onClick={() => setDisplayLoginSignup('signup')}>Sign up</Button>
				</Toolbar>
			</AppBar>
		);
}

const mapStateToProps = state => {
	console.log(state);
	return {
		
	}
}

const mapDispatchToProps = dispatch => {
	return {
		logOut: () => dispatch(logOut())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
