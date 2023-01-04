import React, { useContext, useEffect } from 'react'
import IssueList from './IssueList'
import { UserContext } from '../context/UserProvider'

export default function Public() {
    const {
        issueList,
        deleteIssue,
        setPage,
        userErr,
        setUserErr
    } = useContext(UserContext)

    useEffect(() => {
        setPage("public")
    }, [])

    return(
        <div className='public'>
            <h1>Issues</h1>
            <IssueList
                issues={issueList}
                deleteIssue={deleteIssue}
                userErr={userErr}
                setUserErr={setUserErr}
            />
        </div>
    )
}