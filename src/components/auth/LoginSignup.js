import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
	Typography,
	TextField,
	Button,
	Link,
	IconButton,
	makeStyles,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {
	logIn,
	signUp,
	showLoginSignup,
} from '../../store/actions/authActions';

const useStyles = makeStyles({
	main: {
		height: '100vh',
		width: '100vw',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
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

const LoginSignup = ({
	loginSignup,
	showLoginSignup,
	logIn,
	signUp,
	authError,
}) => {
	const classes = useStyles();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleFormSubmit = e => {
		e.preventDefault();
		const user = {
			email,
			password,
		};
		if (loginSignup === 'login') {
			logIn(user);
		} else if (loginSignup === 'signup') {
			signUp(user);
		}
	};

	const handleFormChange = () => {
		loginSignup === 'login'
			? showLoginSignup('signup')
			: showLoginSignup('login');
		setEmail('');
		setPassword('');
	};

	return (
		<div className={classes.main}>
			<IconButton
				className={classes.closeButton}
				onClick={() => showLoginSignup(null)}
			>
				<CloseIcon />
			</IconButton>
			<form className={classes.container} onSubmit={handleFormSubmit}>
				<Typography variant="h4" className={classes.title}>
					{loginSignup === 'login' ? 'Login' : 'Sign Up'}
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
					{loginSignup === 'login' ? 'Login' : 'Sign Up'}
				</Button>
				<Typography className={classes.text}>
					{loginSignup === 'login'
						? "Don't have an account?"
						: 'Already have an account?'}
					&nbsp;
					<Link className={classes.link} onClick={handleFormChange}>
						{loginSignup === 'login' ? 'Sign Up' : 'Login'}
					</Link>
				</Typography>
				<Typography color="error" align="center">
					{authError ? authError : null}
				</Typography>
			</form>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		authError: state.auth.authError,
		auth: state.firebase.auth,
		loginSignup: state.auth.loginSignup,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		logIn: credentials => dispatch(logIn(credentials)),
		signUp: newUser => dispatch(signUp(newUser)),
		showLoginSignup: show => dispatch(showLoginSignup(show)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginSignup);
