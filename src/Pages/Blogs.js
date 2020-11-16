import React, {useEffect, useState} from 'react'
import BlogPage from '../Components/BlogPage'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@reyes.wilmar";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    const fetchBlog = () =>{
        fetch(mediumURL)
        .then(res => res.json())
        .then(json => setBlogs(json.items))
    }

    useEffect(() => {
        fetchBlog()
    }, [])
    
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    return (

        <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
            <Grid container justify="center" spacing={spacing}>
                {blogs.map(blog => <BlogPage blog={blog} />)}
            </Grid>
        </Grid>
        </Grid>
    )
}

export default Blogs