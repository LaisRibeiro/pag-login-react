import React from 'react';
import clsx from 'clsx';

import { Typography, Grid, TextField, FormControl, InputLabel, Input, InputAdornment, IconButton  } from '@material-ui/core/';
import { Visibility, VisibilityOff } from '@material-ui/icons/';

import { useStyles } from './style';

export default function Login(){

    const classes = useStyles();

    const [user, setUser] = React.useState({
        nameOrEmail: '',
        password: '',
      });

    const handleChange = (prop) => (event) => {
        setUser({ ...user, [prop]: event.target.user });
      };

    const handleClickShowPassword = () => {
        setUser({ ...user, showPassword: !user.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

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
                    <Grid item xs={12} align='center'>
                        <TextField 
                            required 
                            id="standard-required" 
                            label="Users name or Email"
                            className={classes.TextField}
                            />
                    </Grid>
                    <Grid item xs={12} align='center'>
                        <FormControl className={clsx(classes.margin, classes.textField)}>
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={user.showPassword ? 'text' : 'password'}
                                value={user.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    >
                                    {user.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
        </div> 
    );
}