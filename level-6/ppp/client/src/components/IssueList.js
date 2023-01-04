import React from 'react'
import Issue from './Issue'

export default function IssueList(props) {
    const {
        issues,
        deleteIssue,
        page,
        deleteComment,
        userErr,
        setUserErr
    } = props 

    return(
        <div className='issueList'>
            {issues ? issues.map(issue =>
                <Issue
                    key={issue._id}
                    {...issue}
                    deleteComment={deleteComment}
                    deleteIssue={deleteIssue}
                    page={page}
                    userErr={userErr}
                    setUserErr={setUserErr}
                />
            )   :   null}
        </div>
    )
}