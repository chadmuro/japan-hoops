import React from 'react';
import { makeStyles } from '@material-ui/core';
import CourtInfo from './CourtInfo';

const useStyles = makeStyles({
    list: {
        height: 'calc(100vh - 56px)',
        overflowY: 'scroll'
    }
})

const CourtList = () => {
    const classes = useStyles();

    return (
        <div className={classes.list}>
            <CourtInfo />
            <CourtInfo />
            <CourtInfo />
            <CourtInfo />
            <CourtInfo />
            <CourtInfo />
        </div>
    )
}

export default CourtList;
