import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { connect } from 'react-redux';
import { getLocation } from './store/actions/locationActions';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Home from './components/layout/Home';

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

const App = ({ getLocation }) => {
	const [displayAddCourt, setDisplayAddCourt] = useState(false);
	getLocation();

	return (
		<ThemeProvider theme={theme}>
			<Header
				displayAddCourt={displayAddCourt}
				setDisplayAddCourt={setDisplayAddCourt}
			/>
			<Home />
			<Main
				displayAddCourt={displayAddCourt}
				setDisplayAddCourt={setDisplayAddCourt}
			/>
		</ThemeProvider>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		getLocation: () => dispatch(getLocation()),
	};
};

export default connect(null, mapDispatchToProps)(App);
