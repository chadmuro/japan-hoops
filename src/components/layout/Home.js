import React from 'react';
import { makeStyles } from '@material-ui/core';
import hero from '../../img/hero.jpg';

const useStyles = makeStyles({
	home: {
		height: 'calc(100vh - 56px)',
		backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${hero})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
	},
});

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.home}>
            Home Page
        </div>
    )
}

export default Home;
