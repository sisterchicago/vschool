import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
import { ContentContext } from '../context/ContentProvider'
import CommentBox from './CommentBox'
import Vote from './Vote'



export default function Post(props){
  const { title, imgUrl, description, user: postUser, _id: postId, upvotes, downvotes, index, comments } = props
  const { user: loggedInUser } = useContext(UserContext)
  const { deletePost, state, dispatch, setSinglePost, singlePost } = useContext(ContentContext)
  const [voteStatus, setVoteStatus] = useState("neutral")
  const navigate = useNavigate() 
  
  useEffect(()=>{
    if (upvotes?.includes(loggedInUser._id)){
      setVoteStatus("like")
    } else if (downvotes?.includes(loggedInUser._id)){
      setVoteStatus("dislike")
    } else {
      setVoteStatus("neutral")
    }
  }, [upvotes, downvotes])

  function handleEdit(postId){
    let currentPost = state.posts.find(post => post._id === postId)
    setSinglePost(currentPost)
    dispatch({ type: 'edit'})
    navigate('/edit-post')
  }


  const userPost = (
    <> 
      <h2>{title}</h2>
      <h4>{`By ${loggedInUser.username}`}</h4>
      {imgUrl && <img src={imgUrl} alt="user image" className="post-img" />}
      <p>{description}</p>
      <div className="edit-delete-box">
        <button onClick={() => handleEdit(postId)}>Edit</button>
        <button onClick={() => deletePost(postId)}>Delete</button>
      </div>
    </>
  )

  const otherPost = (
    <>
      <h2 >{title}</h2>
      {imgUrl && <img src={imgUrl} alt="user image" className="post-img"/>}
      <p>{description}</p>
    </>
  )

  
  return (
    <div className="post" key={postId} >
      { loggedInUser._id === postUser ?
      userPost
      : otherPost
      }
      <Vote 
        postId={postId} 
        key={postId} 
        upvotes={upvotes} 
        downvotes={downvotes} 
        index={index} 
        voteStatus={voteStatus} 
        setVoteStatus={setVoteStatus} 
        comments={comments}
      />
    </div>
  )
}