import { useState } from 'react'
import { usePostContext } from '../hooks/usePostContext'
import { useAuthContext } from '../hooks/useAuthContext'

export default function PostEdit({ post }) {
    const { state, dispatch } = usePostContext()
    const { user } = useAuthContext()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user) {
            setError('You must be logged in')
            return
        }

        const updatePost = {title, description}

        const response = await fetch('/api/post' + post._id, { 
            method: 'PUT',
            body: JSON.stringify(updatePost),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setTitle( ...state.title )
            setDescription( ...state.description )
            setError(null)
            setEmptyFields([]) 
            console.log('updated post', json)
            dispatch({type: 'UPDATED_POST', payload: json})
        }
    }

    return (
        <form className="update" onSubmit={handleSubmit}>
            <h3>Edit Post</h3>

            <label>Title:</label>
            <input
                type='text'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFields.includes('title') ? 'error' : ''}
            />

            <label>Description:</label>
            <input
                type='text'
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className={emptyFields.includes('description') ? 'error' : ''}
            />

            <button>Edit Post</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}