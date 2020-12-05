import React from 'react';
import { makeStyles } from '@material-ui/core';
import CourtInfo from './CourtInfo';

const useStyles = makeStyles({
	list: {
		height: 'calc(100vh - 56px)',
		overflowY: 'scroll',
	},
});

const CourtList = ({ courts }) => {
	const classes = useStyles();

	return (
		<div className={classes.list}>
			{courts &&
				courts.map(court => {
					return <CourtInfo court={court} key={court.id} />;
				})}
		</div>
	);
};

export default CourtList;
