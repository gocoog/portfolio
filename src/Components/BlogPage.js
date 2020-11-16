import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BookIcon from '@material-ui/icons/Book';

const useStyles = makeStyles({
    root: {
      maxWidth: 545,
      maxHeight: 'auto',
      margin: '30px',
    },
  });

  const tagToText = (node) => {
    let tag = document.createElement('div')
    tag.innerHTML = node
    node = tag.innerText
    return node
  }

  const shortenText = (text,startingPoint ,maxLength) => {
    return text.length > maxLength?
    text.slice(startingPoint, maxLength):
    text
  }

export default function BlogPage(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea onClick={() => window.open(props.blog.link)}>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="300"
                image={props.blog.thumbnail}
                title="mediumThumbnail"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.blog.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {shortenText(tagToText(props.blog.description), 0, 150) + '...'}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<BookIcon />}
                    onClick={() => window.open(props.blog.link)}
                >
                    Read More!
                </Button>
            </CardActions>
        </Card>
    )
}