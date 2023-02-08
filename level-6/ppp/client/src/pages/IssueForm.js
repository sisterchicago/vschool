import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { IssueContext } from '../context/IssueProvider'
import FileUploader from '../components/FileUploader'

const initInputs = {
    issue: "",
    description: "",
    imgUrl: ""
}

export default function IssueForm(props) {
    const { addIssue, editIssue, dispatch, state, uploadedFile, setUploadedFile} = useContext(IssueContext)
    const [inputs, setInputs] = useState(initInputs)
    const navigate = useNavigate()

    useEffect(() => {
        if(state.edit === true) {
            const thisIssue = state.currentIssue 
            setInputs({
                issue: thisIssue.issue,
                description: thisIssue.description,
                imgUrl: thisIssue.imgUrl
            })
        }
    }, [state.edit, state.currentIssue])

    function handleChange(e) {
        const { name, value } = e.target 
        setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: value 
        }))
    }

    useEffect(() => {
        if(uploadedFile.filePath) {
            setInputs((prevInputs) => ({
                ...prevInputs,
                imgUrl: uploadedFile.filePath
            }))
        }
    }, [uploadedFile])

    function handleSubmit(e) {
        e.preventDefault()
        if(state.edit === false) {
            addIssue(inputs)
        } else {
            editIssue(state.currentIssue._id, inputs)
            dispatch({ type: 'edit' })
        }
        setInputs(initInputs)
        navigate(-1)
        setUploadedFile({})
    }

    const { issue, description, imgUrl } = inputs 

    return(
        <div className='issueFormBox'>
            <h3 className='issueFormTitle'>Create new issue</h3>
            <form onSubmit={handleSubmit} className='postform'>
                <input
                    type='text'
                    name='issue'
                    value={issue}
                    onChange={handleChange}
                    placeholder='Issue'
                />
                <textarea
                    type='text'
                    name='description'
                    value={description}
                    onChange={handleChange}
                    placeholder='Content'
                    className='content'
                />
                    <FileUploader />
                {
                    uploadedFile.filePath
                    ? 
                    <a href={uploadedFile.filePath} target="_blank" rel="noreferrer noopener" className='link-element'>Uploaded Image</a>
                    :
                    <input
                        type='text'
                        name='imgUrl'
                        value={imgUrl}
                        onChange={handleChange}
                        placeholder='Copy/Paste image URL here, or upload image before submitting issue'
                    />
                }
                <button
                    type="submit"
                    className='submit-button'
                >
                    Submit
                </button>
                <button
                    type='button'
                    onClick={() => {
                        setUploadedFile({})
                        navigate(-1)
                    }}
                    className='cancel-button'
                >
                    Cancel 
                </button>
            </form>
        </div>
    )
}