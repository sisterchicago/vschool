import React, { useContext, useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { IssueContext } from '../context/IssueProvider'

export default function Issue(props) {
  const {
    issue,
    description,
    imgUrl,
    id: issueId
  } = props
  
  const { deleteIssue, state, dispatch, handleSingleIssue } =
    useContext(IssueContext)
  
  const [userControls, setUserControls] = useState(false)
  const navigate = useNavigate()
  const location = useLocation().pathname

  function toggleControls() {
    setUserControls((prev) => !prev)
  }

  const showUserControls = (
    <div className="edit-delete-box">
      <button onClick={() => handleEdit(issueId)}>Edit</button>
      <button onClick={() => deleteIssue(issueId)}>Delete</button>
      <span onClick={toggleControls}>X</span>
    </div>
  )

  function handleEdit(issueId) {
    let currentIssue = state.issues.find((issue) => issue._id === issueId)
    dispatch({ type: "setSingleIssue", value: currentIssue })
    dispatch({ type: "edit" })
    navigate(`/edit-issue`)
  }

  return (
    <div className='issue' key={issueId}>
      <div className='issue-upper'>
        <Link
          to={`/single-issue/${issueId}`}
          className='link-element issue-upper'
        >
          <div
            className='issue-intro'
            onClick={() => handleSingleIssue(issueId)}
          >
            <h5 className='issue-title'>{issue}</h5>
          </div>
        </Link>
        <div>
            {showUserControls}
        </div>
      </div>
      <div className='issue-content'>
        {imgUrl && (
          <Link to={`/single-issue/${issueId}`} className='link-element'>
            <img
              src={imgUrl}
              alt={issue}
              className='issueImg'
              onClick={() => handleSingleIssue(issueId)}
            />
          </Link>
        )}
        {location === `/single-issue/${issueId}` && (
          <p className='issue-description'>{description}</p>
        )}
      </div>
    </div>
  )
}