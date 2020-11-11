import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    button: {
        border: "8px",
    }
  }));
  
export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>home page</h1>
            <Button className={classes.button} variant="outlined">Default</Button>
        </div>
    )
}