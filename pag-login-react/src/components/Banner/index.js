import {React, useState} from 'react';

import { Grid, IconButton } from '@material-ui/core/';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { useStyles } from './style';

import Img1 from '../../images/img1.png';
import Img2 from '../../images/img2.png';
import Img3 from '../../images/img3.jpg';

export default function Banner(){

    const classes = useStyles();

    const [imgBanner, setImgBanner] = useState(0);

    const slideImages = [
        Img1,
        Img2,
        Img3
      ];

    const handleChangeBack = (event) => {
        event.preventDefault();
        if(imgBanner <= 0){
            setImgBanner(2);
        } else{
            setImgBanner(imgBanner - 1);
        }
        console.log(imgBanner);
    }

    const handleChangeForward = (event) => {
        event.preventDefault();
        if(imgBanner >= 2){
            setImgBanner(0);
        } else{
            setImgBanner(imgBanner + 1);
        }
        console.log(imgBanner);
    }
      
    return (
		<div className={classes.root}>
            <Grid container style={{ display: 'flex' }}> 
                <Grid item xs={12} style={{alignItems: 'center'}}>
                    <img className={classes.imageBanner} src={slideImages[imgBanner]}/>
                    <IconButton onClick={event => handleChangeBack(event)}>
                        <ArrowBackIosIcon fontSize="small" />
                    </IconButton>  
                    <IconButton onClick={event => handleChangeForward(event)}>
                        <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>   
                </Grid>                                                                                                                                                                                             
            </Grid>
        </div> 
    );
}