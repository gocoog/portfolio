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
        <img className="logo" src={logo} />
        <Link to="/" className={classes.textLink} >
          <ThemeProvider theme={theme}>
            <Typography variant="h3">Home</Typography>
          </ThemeProvider>
        </Link>
        <Link to="/projects" className={classes.textLink} >
        <ThemeProvider theme={theme}>
            <Typography variant="h3">Projects</Typography>
          </ThemeProvider>
        </Link>
        <Link to="/blogs" className={classes.textLink} >
        <ThemeProvider theme={theme}>
            <Typography variant="h3">Blogs</Typography>
          </ThemeProvider>
        </Link>
        <Link to="/contact" className={classes.textLink} style={{ flex: 1 }} >
          <ThemeProvider theme={theme}>
            <Typography variant="h3">Contact Me</Typography>
          </ThemeProvider>
        </Link>
        <IconButton 
        className="iconButton"
        edge="start" 
        color="inherit" 
        aria-label="linkedIn" 
        onClick={() => window.open('https://www.linkedin.com/in/wilmarreyes/')}>
        <span className="linkClass"><Box
          clone
          fontSize={{xs:38, sm: 41, md: 45, lg: 55, xl: 75 }}
          p={2}
        >
            <LinkedInIcon />
          </Box>
          </span>
          </IconButton>
          <IconButton 
          className="iconButton"
          edge="start" 
          color="inherit" 
          aria-label="github" 
          onClick={() => window.open('https://github.com/gocoog')}>
            <span className="gitClass">
              <Box
                clone
                fontSize={{xs:38, sm: 41, md: 45, lg: 55, xl: 75 }}
                p={2}
              >
                <GitHubIcon />
              </Box>
            </span>
          </IconButton>
          <IconButton
            className="iconButton" 
            edge="start" 
            color="inherit" 
            aria-label="menu"
            onClick={() => window.open('https://docs.google.com/document/d/e/2PACX-1vQo13Y2EBMNnIzCff7Ute95r7y24Ak8t8IKre4FjUsVlRpd1zodHrlyFFczE0XzBTKjlkiix-f_GP7J/pub')}>
            <span className="resumeClass">
              <Box
              clone
              fontSize={{xs:38, sm: 41, md: 45, lg: 55, xl: 75 }}
              p={2}
              >
                <DescriptionIcon />
              </Box>
            </span>
          </IconButton>
      </Toolbar>
    </AppBar>
    </div>
  )
}