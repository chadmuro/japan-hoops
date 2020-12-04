import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
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
    const [displayAddCourt, setDisplayAddCourt] = useState(false);
    const [displayLoginSignup, setDisplayLoginSignup] = useState(null);

    console.log(displayLoginSignup);
    return (
			<ThemeProvider theme={theme}>
				<Header
					displayAddCourt={displayAddCourt}
					setDisplayAddCourt={setDisplayAddCourt}
					setDisplayLoginSignup={setDisplayLoginSignup}
				/>
				<Main
					displayAddCourt={displayAddCourt}
					setDisplayAddCourt={setDisplayAddCourt}
					displayLoginSignup={displayLoginSignup}
					setDisplayLoginSignup={setDisplayLoginSignup}
				/>
			</ThemeProvider>
		);
}

export default App;
