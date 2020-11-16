import React, {useReducer} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: "white",
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: "black",
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        color: "white",
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
      textfield: {
          alignItems: "center",
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
          },
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#b4c3ed"
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#b4c3ed"
          },
          "& .MuiOutlinedInput-input": {
            color: "white"
          },
          "&:hover .MuiOutlinedInput-input": {
            color: "#b4c3ed"
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "#b4c3ed"
          },
          "& .MuiInputLabel-outlined": {
            color: "white"
          },
          "&:hover .MuiInputLabel-outlined": {
            color: "#b4c3ed"
          },
          "& .MuiInputLabel-outlined.Mui-focused": {
            color: "#b4c3ed"
          }
      }
  }));

  
  export default function Contact() {
        const classes = useStyles();

        const [inputValues, setInputValues] = useReducer(
            (state, newState) => ({ ...state, ...newState }),
            {name: '', email: '', subject: '', message: ''}
            );
            
        const handleOnChange = event => {
            const { name, value } = event.target;
            setInputValues({ [name]: value });
        };

        const handleSubmit = (name, email, subject, message) => {
            console.log({name})
        }
        return (
            <Container maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <ContactMailIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Contact Form
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField
                        className={classes.textfield}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoFocus
                        onChange={handleOnChange}
                    />
                <TextField
                    className={classes.textfield}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={handleOnChange}
                />
                <TextField
                        className={classes.textfield}
                        type="text"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="subject"
                        label="Subject"
                        name="subject"
                        onChange={handleOnChange}
                    />
                <TextField
                    className={classes.textfield}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="message"
                    label="Message"
                    type="textbox"
                    id="message"
                    onChange={handleOnChange}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="white"
                    className={classes.submit}
                >
                    Send Message
                </Button>
                </form>
            </div>
            </Container>
            
        )
}