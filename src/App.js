import React from 'react';
import { Grid, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Header from './components/layout/Header';
import Main from './components/layout/Main';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#17408b"
        },
        secondary: {
            main: "#c9082a"
        }
    },
    mixins: {
        toolbar: {
            minHeight: 56
        }
    }
});

const App = () => {
    return (
			<ThemeProvider theme={theme}>
				<Header />
				<Main />
			</ThemeProvider>
		);
}

export default App;
