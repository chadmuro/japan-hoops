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

    return (
			<ThemeProvider theme={theme}>
				<Header
					displayAddCourt={displayAddCourt}
					setDisplayAddCourt={setDisplayAddCourt}
				/>
				<Main
					displayAddCourt={displayAddCourt}
					setDisplayAddCourt={setDisplayAddCourt}
				/>
			</ThemeProvider>
		);
}

export default App;
