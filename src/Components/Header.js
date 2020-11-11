import { AppBar, Toolbar } from '@material-ui/core'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';
import Box from "@material-ui/core/Box";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.9rem',
  },
};

const handleClick = (e) => {
  e.preventDefault()
  console.log(e.target.value)
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  textLink: {
    color: 'inherit',
    textDecoration: 'inherit',
    marginRight: theme.spacing(2),
    fontSize: 25,
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <AppBar style={{ background: 'none'}} elevation={0} position="static">
      <Toolbar>
        <img className="logo" src={logo}></img>
        <Link to="/" className={classes.textLink} >
          <ThemeProvider theme={theme}>
            <Typography variant="h3">Home</Typography>
          </ThemeProvider>
        </Link>
        <Link to="/projects" className={classes.textLink} style={{ flex: 1 }}>
        <ThemeProvider theme={theme}>
            <Typography variant="h3">Projects</Typography>
          </ThemeProvider>
        </Link>
        <IconButton 
        edge="start" 
        color="inherit" 
        aria-label="linkedIn" 
        onClick={() => window.open('https://www.linkedin.com/in/wilmarreyes/')}>
        <Box
          clone
          fontSize={{ sm: 38, md: 45, lg: 55, xl: 75 }}
        >
            <LinkedInIcon />
          </Box>
          </IconButton>
          <IconButton 
          edge="start" 
          color="inherit" 
          aria-label="github" 
          onClick={() => window.open('https://github.com/gocoog')}>
          <Box
          clone
          fontSize={{ sm: 38, md: 45, lg: 55, xl: 75 }}
        >
            <GitHubIcon />
          </Box>
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Box
            clone
            fontSize={{ sm: 38, md: 45, lg: 55, xl: 75 }}
            >
              <DescriptionIcon />
            </Box>
          </IconButton>
      </Toolbar>
    </AppBar>
    </div>
  )
}