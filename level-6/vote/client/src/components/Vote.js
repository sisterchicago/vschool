import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ContentContext } from "../context/ContentProvider"
import { Link } from 'react-router-dom'

export default function Vote(props){
  const { 
    upvotePost, 
    downvotePost, 
    removeUpvote, 
    removeDownvote, 
    state, 
    singlePost, 
    setSinglePost
  } = useContext(ContentContext)

  const { postId, index, voteStatus, comments} = props 

  function handleSinglePost(postId){
    let currentPost = state.posts.find(post => post._id === postId)
    setSinglePost(currentPost)
  }

  const location = useLocation()

  const singlePostView = (
    <div className="vote-box">
      <button 
        className={
          voteStatus == "like" 
          ? "like"
          : "neutral"
        }
        onClick={
          voteStatus == "like"
          ? ()=>removeUpvote(postId, voteStatus)
          : ()=>upvotePost(postId, voteStatus)
        }
        >
          {singlePost?.upvotes?.length} 
            Like
      </button>
      <button 
        className={
          voteStatus == 'dislike' 
          ? "dislike"
          : "neutral"
        }
        onClick={
          voteStatus == 'dislike'
          ? ()=>removeDownvote(postId, voteStatus)
          : ()=>downvotePost(postId, voteStatus)
        }
      >
        {singlePost?.downvotes?.length} 
          Dislike
      </button>
      <h5>{comments.length} Comments</h5>

        {location.pathname != '/single-post' && 
          <Link to='/single-post'>
          <button onClick={()=>handleSinglePost(postId)}>Add Comment</button>
          </Link>
        }
    </div>
  )

  const listView = (
    <div className="vote-box">
      <button 
        className={
          voteStatus == "like" 
          ? "like"
          : "neutral"
        }
        onClick={
          voteStatus == "like"
          ? ()=>removeUpvote(postId, voteStatus)
          : ()=>upvotePost(postId, voteStatus)
        }
        >
          {state.posts[index]?.upvotes?.length} 
            Like
      </button>
      <button 
        className={
          voteStatus == 'dislike' 
          ? "dislike"
          : "neutral"
        }
        onClick={
          voteStatus == 'dislike'
          ? ()=>removeDownvote(postId, voteStatus)
          : ()=>downvotePost(postId, voteStatus)
        }
      >
        {state.posts[index]?.downvotes?.length} 
          Dislike
      </button>
        <Link to='/single-post' className='link-element' >
          <div className="vote-box-comments" onClick={()=>handleSinglePost(postId)}>
            <h5>{comments.length} Comments</h5>
            <button onClick={()=>handleSinglePost(postId)}>Add Comment</button>
          </div>
        </Link>
    </div>
  )

  return(
    <>
      {location.pathname != '/single-post'
      ? listView
      : singlePostView
    }
    </>
  )
}