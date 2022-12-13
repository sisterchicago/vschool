import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ContentContext } from "../context/ContentProvider"
import { Link } from 'react-router-dom'

export default function Vote(props){
  const { upvotePost, downvotePost, removeUpvote, removeDownvote, state, singlePost, setSinglePost} = useContext(ContentContext)
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
          voteStatus == "yea" 
          ? "yea"
          : "neutral"
        }
        onClick={
          voteStatus == "yea"
          ? ()=>removeUpvote(postId, voteStatus)
          : ()=>upvotePost(postId, voteStatus)
        }
        >{singlePost?.upvotes?.length} Yea</button>
      <button 
      className={
        voteStatus == 'nay' 
        ? "nay"
        : "neutral"
      }
        onClick={
          voteStatus == 'nay'
          ? ()=>removeDownvote(postId, voteStatus)
          : ()=>downvotePost(postId, voteStatus)
        }
        >{singlePost?.downvotes?.length} Nay</button>
        <h5>{comments.length} Comments</h5>
        {location.pathname != '/single-post' && <Link to='/single-post'>
          <button
            onClick={()=>handleSinglePost(postId)}
          >Add Comment</button>
        </Link>}
    </div>
  )

  const listView = (
    <div className="vote-box">
      <button 
        className={
          voteStatus == "yea" 
          ? "yea"
          : "neutral"
        }
        onClick={
          voteStatus == "yea"
          ? ()=>removeUpvote(postId, voteStatus)
          : ()=>upvotePost(postId, voteStatus)
        }
        >{state.posts[index]?.upvotes?.length} Yea</button>
      <button 
      className={
        voteStatus == 'nay' 
        ? "nay"
        : "neutral"
      }
        onClick={
          voteStatus == 'nay'
          ? ()=>removeDownvote(postId, voteStatus)
          : ()=>downvotePost(postId, voteStatus)
        }
        >{state.posts[index]?.downvotes?.length} Nay</button>
        <Link to='/single-post' className='link-element' >
          <div className="vote-box-comments" onClick={()=>handleSinglePost(postId)}>
            <h5>{comments.length} Comments</h5>
            <button
              onClick={()=>handleSinglePost(postId)}
            >Add Comment</button>
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