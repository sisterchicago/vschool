import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import { ContentContext } from "../context/ContentProvider"

export default function Comment(props){
  const { user }  = useContext(UserContext)
  const { deleteComment } = useContext(ContentContext)
  const { comment, author } = props


  
  return(
    <div className='single-comment-box'>
      <h4>{ author.username }</h4>
      <p>{ comment }</p>
    </div>
  )
}