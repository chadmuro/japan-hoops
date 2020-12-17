import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import hoops from '../../img/hoops.mp4';

const useStyles = makeStyles({
	root: {
		height: '500px',
		width: '100%',
		position: 'relative',
	},
	video: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100%',
		width: '100%',
		opacity: 0.7,
		overflow: 'hidden',
        objectFit: 'cover',
        zIndex: -1
    },
    text: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const Community = () => {
    const classes = useStyles();

    return (
			<div className={classes.root}>
				<video className={classes.video} autoPlay muted loop>
					<source src={hoops} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<div className={classes.text}>
					<Typography variant="h3" color="secondary">
						Join Us Today!
					</Typography>
				</div>
			</div>
		);
}

export default Community;
