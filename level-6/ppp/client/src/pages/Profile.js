import React, { useContext, useEffect } from 'react'
import IssueList from '../components/IssueList'
import { IssueContext } from '../context/IssueProvider'
import { UserContext } from '../context/UserProvider'

export default function Profile() {
    const { state, getUserIssues } = useContext(IssueContext)

    const { user: { username } } = useContext(UserContext)

    useEffect(() => {
        getUserIssues()
    }, [])

    return(
        <div className='profile-page'>
            <p>Welcome, { username }! Here are your issues:</p>
            <IssueList issues={state.issues} />
        </div>
    )
}