import React from 'react';

import { Paper, Grid } from '@material-ui/core/';

import { useStyles } from './style';
import Login from '../../components/Login';

export default function TelaLogin(){

    const classes = useStyles();

    return (
		<div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Login/>
                </Grid>
            </Grid>
        </div> 
    );
}