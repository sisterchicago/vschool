import React from 'react'
import blogData from './blogData'
import BlogPost from './BlogPost'
import { FaArrowRight } from 'react-icons/fa'


function BlogList(props) {
    const blogComponents = blogData.map(blogItem => <BlogPost blog={blogItem}/>)
    return (
        <div id='blogContainer'>
            {blogComponents}
            <a href='https://startbootstrap.github.io/startbootstrap-clean-blog/#!'>Older Posts <FaArrowRight style={{fontSize: "1rem", position: "relative", left: "4px"}} /></a>
        </div>
    )
}


export default BlogList