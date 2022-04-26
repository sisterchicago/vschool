import React from 'react'
import blogData from './blogData'
import BlogPost from './BlogPost'
//import { FaArrowRight } from 'react-icons/fa'


function BlogList(props) {
    const blogComponents = blogData.map(blogItem => <BlogPost blog={blogItem}/>)
    return (
        <div id='blogContainer'>
            {blogComponents}
            <a style={{fontSize: "1rem", position: "relative", left: "4px"}}  href='https://startbootstrap.github.io/startbootstrap-clean-blog/#!'>Older Posts</a>
        </div>
    )
}


export default BlogList