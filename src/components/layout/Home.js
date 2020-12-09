import React from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';
import { motion } from 'framer-motion';
import hero from '../../img/hero.jpg';
import basketball from '../../img/basketball.png';

const useStyles = makeStyles(theme => ({
	hero: {
		height: '80vh',
		backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${hero})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		padding: theme.spacing(2),
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		width: 'auto',
		position: 'relative',
	},
	title: {
		color: theme.palette.primary.contrastText,
		zIndex: 10,
	},
	ball: {
		height: '100px',
		width: '100px',
		position: 'absolute',
		bottom: 0,
	},
	ballImage: {
		height: '100%',
		width: '100%',
	},
}));

const Home = () => {
	const classes = useStyles();

	const bounceTransition = {
		y: {
			duration: 0.4,
			yoyo: Infinity,
			ease: 'easeOut',
		},
	};

	return (
		<>
			<div className={classes.hero}>
				<div className={classes.content}>
					<div className={classes.ball}>
						<motion.img
							src={basketball}
							className={classes.ballImage}
							transition={bounceTransition}
							animate={{ y: ['0%', '-150%'] }}
						/>
					</div>
					<Typography variant="h2" align="center" className={classes.title}>
						Japan Hoops
					</Typography>
					<Button
						color="secondary"
						variant="contained"
						className={classes.button}
					>
						View Map
					</Button>
				</div>
			</div>
            <div className={classes.features}>
                
            </div>
		</>
	);
};

export default Home;
