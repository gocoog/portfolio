import React, {useEffect, useState} from 'react'
import BlogPage from '../Components/BlogPage'

const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@reyes.wilmar";

export default function Blogs(){
    const [blogs, setBlogs] = useState([])

    const fetchBlog = () =>{
        fetch(mediumURL)
        .then(res => res.json())
        .then(json => setBlogs(json.items))
    }

    useEffect(() => {
        fetchBlog()
    })

    return (
        <div>
            {blogs.map(blog => <BlogPage blog={blog} />)}
        </div>
    )
}