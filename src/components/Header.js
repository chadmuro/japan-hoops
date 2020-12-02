import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    title: {
        flexGrow: 1
    }
})

const Header = () => {
    const classes = useStyles();

    return (
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						Japan Hoops
					</Typography>
					<Button color="inherit">Add Court</Button>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
		);
}

export default Header;
