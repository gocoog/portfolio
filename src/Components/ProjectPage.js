import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        margin: theme.spacing(1),
      },
  }));

export default function ProjectPage(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <div>
            <h1 className="project-title">{props.project.project_name}</h1>
        <div className="project-card">
            <div className="project-child">
            <img className="project-image" src={props.project.screenshot} alt="project screenshot"  />
            </div>
            <div className="project-child2">
                <p className="about">{props.project.about}</p>
                {props.project.frontend ? 
                <div>
                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<GitHubIcon />}
                    onClick={() => window.open(props.project.backend)}
                >
                    Backend Repo
                </Button>
                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<GitHubIcon />}
                    onClick={() => window.open(props.project.frontend)}
                >
                    Frontend Repo
                </Button> 
                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<YouTubeIcon />}
                    onClick={handleOpen}
                >
                    Demo
                </Button> 
                </div> : <div> 
                    <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<GitHubIcon />}
                    onClick={() => window.open(props.project.backend)}
                >
                    Repo
                </Button> 
                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<YouTubeIcon />}
                    onClick={handleOpen}
                >
                    Demo
                </Button>
                </div>
                }
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={open}>
                    <iframe className="video" width="760" height="515" src={props.project.demo} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Fade>
                </Modal>
            </div>
        </div>
        </div>
    )
}