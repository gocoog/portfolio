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
          <div className="typewriter">
          <div className="typewriter-text">Hello! I'm Wilmar Reyes</div>
          </div>
            
            <h4 className="home-desc">I'm a full stack software engineer currently based in Houston, TX</h4>
            <h4 className="home-desc">Feel free to look around my site and let's connect!</h4>
            <Link to="/projects" className={classes.textlink}>
            <Button className={classes.button} variant="outlined">View Projects</Button>
            </Link>
        </div>
    )
}