import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'


export default function Star(props) {
    const { starStatus, starredIssue, removeStar, issueId } = props 

    const emptyStar = (
        <AiOutlineStar 
            onClick={
                starStatus === 'starred'
                    ? () => removeStar(issueId)
                    : () => starredIssue(issueId)
            }
            className='star-outline'
        />
    )

    const fullStar = (
        <AiFillStar 
            onClick={
                starStatus === 'starred'
                    ? () => removeStar(issueId)
                    : () => starredIssue(issueId)
            }
            className='star-filled'
        />
    )

    return (
        <div className='star'>
            { starStatus === 'starred' ? fullStar: emptyStar }
        </div>
    )
}