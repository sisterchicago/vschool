import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IssueContext } from '../context/IssueProvider'
import Issue from '../components/Issue'

export default function SingleIssue(props) {
    const { state, getOneIssue } = useContext(IssueContext)
    const { singleIssueId } = useParams()
    let currentIssue = state.currentIssue

    useEffect(() => {
        getOneIssue(singleIssueId)
    }, [])

    return(
        <div className='singleIssue'>
            <Issue {...currentIssue} key={currentIssue.id} id={currentIssue._id} />
        </div>
    )
}