import React, { useState } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../store/actions/authActions';
import { Typography, TextField, Button, Link, IconButton, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
	main: {
		height: 'calc(100vh - 56px)',
		width: '100vw',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative'
	},
	container: {
		display: 'flex',
		width: '70%',
		maxWidth: '400px',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	closeButton: {
		position: 'absolute',
		top: 5,
		right: 5,
	},
	title: {
		marginBottom: '1rem',
	},
	link: {
		cursor: 'pointer',
	},
	button: {
		marginTop: '1rem',
	},
	text: {
		marginTop: '1rem',
	},
});

const LoginSignup = ({ displayLoginSignup, setDisplayLoginSignup, logIn, authError }) => {
	const classes = useStyles();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleFormSubmit = e => {
		e.preventDefault();
		const cred = {
			email,
			password
		}
	
		if (displayLoginSignup === 'login') {
			logIn(cred);
		} else if (displayLoginSignup === 'signup'){
			logIn(cred);
		}
	};

	const handleFormChange = () => {
		displayLoginSignup === 'login' ? setDisplayLoginSignup('signup') : setDisplayLoginSignup('login');
		setEmail('');
		setPassword('');
	};

	return (
		<div className={classes.main}>
			<IconButton className={classes.closeButton} onClick={() => setDisplayLoginSignup(null)}>
				<CloseIcon />
			</IconButton>
			<form
				className={classes.container}
				onSubmit={handleFormSubmit}
			>
				<Typography variant="h4" className={classes.title}>
					{displayLoginSignup === 'login' ? 'Login' : 'Sign Up'}
				</Typography>
				<TextField
					value={email}
					onChange={e => setEmail(e.target.value)}
					type="email"
					label="Email"
					fullWidth
					required
				/>
				<TextField
					value={password}
					onChange={e => setPassword(e.target.value)}
					type="password"
					label="Password"
					fullWidth
					required
				/>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					className={classes.button}
					align="center"
				>
					{displayLoginSignup === 'login' ? 'Login' : 'Sign Up'}
				</Button>
				<Typography className={classes.text}>
					{displayLoginSignup === 'login'
						? "Don't have an account?"
						: 'Already have an account?'}
					&nbsp;
					<Link className={classes.link} onClick={handleFormChange}>
						{displayLoginSignup === 'login' ? 'Sign Up' : 'Login'}
					</Link>
				</Typography>
				<Typography color="error">{ authError ? authError : null }</Typography>
			</form>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		authError: state.auth.authError
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		logIn: (credentials) => dispatch(logIn(credentials))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginSignup);
