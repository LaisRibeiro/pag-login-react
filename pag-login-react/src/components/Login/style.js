import {
    makeStyles
  } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '20px',
        display: 'flex'
      },
      TextField: {
        fontFamily: 'sans-serif',
        color: '#696969',
        width: '350px'
      },
      margin: {
        margin: theme.spacing(1),
      },
}));