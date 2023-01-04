import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserProvider'

export default function IssueForm(props) {
    const { addIssue } = props
    const { user } = useContext(UserContext)

    const initInputs = {
        title: "",
        description: "",
        username: user.username
    }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInput => ({
            ...prevInput,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        addIssue(inputs)
        setInputs(initInputs)
    }

    const { title, description } = inputs

    return(
        <form className='issueForm' onSubmit={handleSubmit}>
            <input
                type='text'
                name='title'
                placeholder='Title'
                value={title}
                onChange={handleChange}
            />
            <textarea
                type='text'
                name='description'
                placeholder='Description'
                value={description}
                onChange={handleChange}
            />
            <button>Add Issue</button>
        </form>
    )
}