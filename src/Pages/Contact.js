import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import emailjs from 'emailjs-com';



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

        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        const [subject, setSubject] = useState('')
        const [message, setMessage] = useState('')
 
        const handleSubmit = (e) => {
            e.preventDefault()

            const templateParams = {
                name: name,
                email: email,
                subject: subject,
                message: message
            };
            
            emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_USER_ID)
                .then((response) => {
                   alert('Message succesfully sent! I will get in touch with you soon.', response.status, response.text)
                   e.target.reset()
                }, (err) => {
                   alert('Failed to send message. Please try again.', err);
                });
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
                        type="text"
                        autoFocus
                        onChange={(e) => setName(e.target.value)}
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
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                        className={classes.textfield}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="subject"
                        label="Subject"
                        name="subject"
                        onChange={(e) => setSubject(e.target.value)}
                    />
                <TextField
                    className={classes.textfield}
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="message"
                    label="Message"
                    onChange={(e) => setMessage(e.target.value)}
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