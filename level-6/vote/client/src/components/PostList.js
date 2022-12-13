import React, { useContext, useEffect, useState } from 'react'
import Post from './Post'
import { ContentContext } from '../context/ContentProvider'

export default function PostList(props) {
  const { state } = useContext(ContentContext)

  function compareNumbers(a, b) {
    const totalA = a.upvotes.length - a.downvotes.length
    const totalB = b.upvotes.length - b.downvotes.length
    console.log('totalA')
    console.log(totalA)
    console.log('totalB')
    console.log(totalB)
    if (totalA < totalB) {
      return -1
    } else if (totalA === totalB) {
      return 0
    } else {
      return 1
    }
  }

  return (
    <div>
      {state.posts?.map((post, index) => (
        <Post {...post} key={post._id} id={post._id} index={index} />
      ))}
    </div>
  )
}