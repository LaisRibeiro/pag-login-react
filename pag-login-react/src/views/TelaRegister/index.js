import React from 'react';

import { Paper, Grid } from '@material-ui/core/';

import { useStyles } from './style';
import Register from '../../components/Register';
import Banner from '../../components/Banner';

export default function TelaRegister(){

    const classes = useStyles();

    return (
		<div className={classes.root}>
            <Grid container>
                <Grid item xs style={{ display: 'flex' }}>
                    <Banner/>
                </Grid>
                <Grid item xs sm={6} style={{ display: 'flex' }}>
                    <Register/>
                </Grid>
            </Grid>
        </div> 
    );
}