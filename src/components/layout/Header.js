import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    title: {
        flexGrow: 1
    }
})

const Header = ({ displayAddCourt, setDisplayAddCourt, setDisplayLoginSignup }) => {
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
					<Button color="inherit">Logout</Button>
					<Button color="inherit" onClick={() => setDisplayLoginSignup('login')}>Login</Button>
					<Button color="inherit" onClick={() => setDisplayLoginSignup('signup')}>Sign up</Button>
				</Toolbar>
			</AppBar>
		);
}

export default Header;
