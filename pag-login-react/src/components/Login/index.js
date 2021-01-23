import React from 'react';

import { Typography, Grid, TextField } from '@material-ui/core/';

import { useStyles } from './style';

export default function Login(){

    const classes = useStyles();

    return (
		<div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} align='right'>
                    <Typography variant="h4" gutterBottom style={{ marginTop: '50px', marginRight: '70px' }}>
                        Invision
                    </Typography>
                </Grid>
                <Grid item xs={12} align='center' style={{ marginTop: '50px' }}>
                    <Typography variant="h5" gutterBottom style={{ fontFamily: 'sans-serif', color: '#696969' }}>
                        Welcome to Invision
                    </Typography>
                    <TextField 
                        required 
                        id="standard-required" 
                        label="Users name or Email"
                        className={classes.TextField} 
                        />
                </Grid>
            </Grid>
        </div> 
    );
}