import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    text: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    }
})

const Footer = () => {
    const classes = useStyles();
	return (
		<AppBar position="sticky">
			<Toolbar>
				<Typography variant="body1" align="center" className={classes.text}>
					Copyright &copy; 2020 Chad Murobayashi
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Footer;
