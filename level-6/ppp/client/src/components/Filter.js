import React, { useState, useEffect } from 'react'
import Star from './Star'

export default function Filter(props) {
    const { stars, issueArray, setFilteredIssues } = props 
    const [displayFilters, setDisplayFilters] = useState(true)

    const filteredStars = [...new Set(stars)]

    function starFilter(issueArray, property) {
        const issuesByStar = issueArray.filter((issue) => issue.star === property)
        setFilteredIssues(issuesByStar)
    }

   function toggleFilters() {
    setDisplayFilters(prev => !prev)
   }

   const showFilters = (
    <div className='filter'>
        <button onClick={ toggleFilters }>Hide Starred Issues</button>
        <h6 
            className='all-issue-filter'
            onClick={() => setFilteredIssues()}
        >
            See All Issues
        </h6>
        {filteredStars?.map((star, index) => (
            <Star
                star={star}
                key={index}
            />
        ))}
    </div>
   )

   const hideFilters = (
    <div className='filter'>
        <button onClick={ toggleFilters }>Show Starred Issues</button>
    </div>
   )

   return (
    displayFilters ? showFilters : hideFilters
   )
}