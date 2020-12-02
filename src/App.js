import React from 'react';
import { Grid, Hidden, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Header from './components/Header';
import Map from './components/Map';
import CourtList from './components/CourtList';
import AddCourt from './components/AddCourt';

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
				<Grid container>
					<Grid item xs={12} sm={6} md={7} lg={8} xl={9}>
						<Map />
					</Grid>
					{/* <Hidden xsDown>
						<Grid item sm={6} md={5} lg={4} xl={3}>
							<CourtList />
						</Grid>
					</Hidden> */}
					<Grid item xs={12} sm={6} md={5} lg={4} xl={3}>
						<AddCourt />
					</Grid>
				</Grid>
			</ThemeProvider>
		);
}

export default App;
