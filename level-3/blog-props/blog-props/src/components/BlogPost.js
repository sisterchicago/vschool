import React from 'react'

function BlogPost(props) {
    return (
        <div className='blogPost'>
            <div id='hoverMe'>
                <h2>{props.blog.title}</h2>
                <h3>{props.blog.subTitle}</h3>
            </div>
            <p>Posted by <a href='https://startbootstrap.github.io/startbootstrap-clean-blog/#!'>{props.blog.author}</a> on {props.blog.date}</p>
        </div>
    )
}

export default BlogPost