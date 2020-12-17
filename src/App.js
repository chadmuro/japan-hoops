import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { connect } from 'react-redux';
import { getLocation } from './store/actions/locationActions';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';
import Home from './components/layout/Home';
import Features from './components/layout/Features';
import Community from './components/layout/Community';
import LoginSignup from './components/auth/LoginSignup';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#17408b',
		},
		secondary: {
			main: '#c9082a',
		},
	},
	mixins: {
		toolbar: {
			minHeight: 56,
		},
	},
});

const App = ({ loginSignup, getLocation }) => {
	const [displayAddCourt, setDisplayAddCourt] = useState(false);
	getLocation();

	return (
		<ThemeProvider theme={theme}>
			{loginSignup && <LoginSignup />}
			{!loginSignup && (
				<>
					<Header
						displayAddCourt={displayAddCourt}
						setDisplayAddCourt={setDisplayAddCourt}
					/>
					<Home />
					<Features />
					<Main
						displayAddCourt={displayAddCourt}
						setDisplayAddCourt={setDisplayAddCourt}
					/>
					<Community />
					<Footer />
				</>
			)}
		</ThemeProvider>
	);
};

const mapStateToProps = state => {
	return {
		loginSignup: state.auth.loginSignup,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getLocation: () => dispatch(getLocation()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
