import React from 'react';

import { Paper, Grid } from '@material-ui/core/';

import { useStyles } from './style';
import Register from '../../components/Register';

export default function TelaRegister(){

    const classes = useStyles();

    return (
		<div className={classes.root}>
            <Grid container>
                <Grid item xs style={{ display: 'flex' }}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs sm={6} style={{ display: 'flex' }}>
                    <Register/>
                </Grid>
            </Grid>
        </div> 
    );
}