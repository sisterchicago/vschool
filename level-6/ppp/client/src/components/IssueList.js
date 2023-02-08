import React, { useContext, useState } from 'react'
import Issue from './Issue'
import Filter from './Filter'
import { IssueContext } from '../context/IssueProvider'

export default function IssueList(props) {
    const { state } = useContext(IssueContext)
    const [filteredIssues, setFilteredIssues] = useState()

    const displayAll = (
        <>
            { state?.issues?.map((issue, index) => (
                <Issue {...issue} key={issue._id} id={issue._id} index={index} /> 
            ))}
        </>
    )

    const displayFilteredIssues = (
        <>
            { filteredIssues?.map((issue, index) => (
                <Issue {...issue} key={issue._id} id={issue._id} index={index} />
            ))}
        </>
    )

    return (
        <div className='issue-list'>
            <Filter
                issueArray={state.issues}
                setFilteredIssues={setFilteredIssues}
            />
            <div className='issue-list'>
                { filteredIssues ? displayFilteredIssues : displayAll }
            </div>
        </div>
    )
}