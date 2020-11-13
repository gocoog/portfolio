import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    button: {
        color: "black",
        backgroundColor: "white",
    },
    textlink: {
      textDecoration: "inherit",
    }
  }));
  
export default function Home() {
    const classes = useStyles();
    return (
        <div className="home-page">
            <h1>Hello! I'm Wilmar Reyes</h1>
            <h4>I'm a full stack software engineer currently based in Houston, TX</h4>
            <h4>Feel free to look around my site and let's connect!</h4>
            <Link to="/projects" className={classes.textlink}>
            <Button className={classes.button} variant="outlined">Projects</Button>
            </Link>
        </div>
    )
}