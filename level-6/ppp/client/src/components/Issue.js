import React, { useState } from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'

export default function Issue(props) {
    const {
        title, 
        description,
        _id,
        username,
        comments,
        deleteComment,
        deleteIssue,
        page,
        userErr,
        setUserErr
    } = props

    const [addComment, setAddComment] = useState(false)
    const [isError, setIsError] = useState(false)

    function deleteButton() {
        if(page === 'profile') {
            return <button className='deleteIssueBtn' onClick={() => deleteIssue(_id)}>Delete</button>
        } else { return null }
    }

    function displayError(id) {
        if(id === _id) {
            setIsError(!isError)
            setTimeout(() => { return (setIsError(false))}, 2000)
        } else { return null }
    }

    return(
        <div className='issue'>
            <div>
                <div className='issueTitle'>
                    <h2>{title}</h2>
                    {deleteButton}
                </div>
                <div className='userDescription'>
                    <p>{description}</p>
                    <p className='username'>- {username}</p>
                </div>
                <div>
                    <button onClick={() => { setAddComment(!addComment) }}>✚ 💬</button>
                </div>
                {isError && userErr}
            </div>
            <CommentList
                comments={comments}
                _id={_id}
                page={page}
                deleteComment={deleteComment}
            />
            {addComment && <CommentForm _id={_id} setAddComment={setAddComment} />}
        </div>
    )
}