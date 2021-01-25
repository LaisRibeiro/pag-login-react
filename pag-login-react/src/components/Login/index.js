import { React, useState } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom'

import { Typography, Grid, TextField, FormControl, InputLabel, Input, InputAdornment, IconButton, Button, Divider } from '@material-ui/core/';
import LinkMat from '@material-ui/core/Link';
import { Visibility, VisibilityOff } from '@material-ui/icons/';

import { useStyles } from './style';

export default function Login(){

    const classes = useStyles();

    const [user, setUser] = useState({
        nameOrEmail: '',
        password: '',
      });

    const [auxUser, setAuxUser] = useState([]);

    const handleChange = (prop) => (event) => {
        setUser({ ...user, [prop]: event.target.user });
    };

    const handleClickShowPassword = () => {
        setUser({ ...user, showPassword: !user.showPassword });
    };
    
    const handleMouseDownPassword = (event) => {
       event.preventDefault();
    };

    const handleChangeUser = (event, nameOrEmail, password) => {
        event.preventDefault();
	    getLogin(nameOrEmail, password);
	};

    const getLogin = (nameOrEmail, password) => {
		fetch('./users.json', {
			headers: {
				Accept: "application/json"
			}
		})
		.then(res => res.json())
		.then(res => setAuxUser(res.users))

		var arrayFilter = auxUser.filter(value => {
            if(value.email === nameOrEmail){
                if(value.password === password){
                    return alert("Login Efetuado com sucesso");
                }else {
                    return alert("Senha Incorreta");
                }
            }else {
                return alert("Nome ou Email digitado incorretamente");
            }
		});

	}

    return (
		<div className={classes.root}>
            <Grid container style={{ display: 'flex' }}>
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
                        <FormControl className={clsx(classes.margin, classes.textField)} style={{ marginTop: '20px' }}>
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={user.showPassword ? 'text' : 'password'}
                                value={user.password}
                                onChange={handleChange('password')}
                                style={{ width: 'flex', minWidth: '350px' }}
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
                        <Grid item xs={12} align='center'>
                            <LinkMat component={Link} to="/">
                                Forget password?
                            </LinkMat>
                        </Grid>
                        <Grid item xs={12} align='center' style={{ marginTop: '30px' }}>
                            <Button variant="contained" className={classes.button} onClick={event => handleChangeUser(event, user.nameOrEmail, user.password)}>
                                Sign in
                            </Button>
                          <Divider variant="middle" style={{ marginTop: '30px', width: '350px' }} />
                        </Grid>
                        <Grid item xs={12} align='center'>
                            <Typography className={classes.TextField}>New Invision?
                                <LinkMat component={Link} to="/register-user">
                                    Create Account
                                </LinkMat>
                            </Typography>
                        </Grid>
                    </Grid>                                                                                                                                                                                                                                                                                                                                                             
                </Grid>
            </Grid>
        </div> 
    );
}