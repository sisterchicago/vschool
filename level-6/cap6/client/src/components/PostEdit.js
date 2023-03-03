import { useState } from 'react'
import { usePostContext } from '../hooks/usePostContext'
import { useAuthContext } from '../hooks/useAuthContext'

export default function PostEdit({ post, setEdit }) {
    const { dispatch } = usePostContext()
    const { user } = useAuthContext()

    console.log('post in postEdit:', post)

    // const [title, setTitle] = useState('')
    // const [description, setDescription] = useState('')
    const [error, setError] = useState(null)

    const [editingPost, setEditingPost] = useState({
        title: post.title,
        description: post.description,
        _id: post._id
    })

    function handleChange(e){
        console.log('handle change called')
        const {name, value} = e.target
        setEditingPost(prevPost => {
            return {
                ...prevPost,
                [name]: value
            }
        })
        console.log('editingPost in handleChange', editingPost)
    }

    console.log('editingPost state', editingPost)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user) {
            setError('You must be logged in')
            return
        }

        const updatedPost = {...editingPost}
        console.log('updatedPost', updatedPost)
        
        const response = await fetch('/api/post/' + editingPost._id, { 
            method: 'PUT',
            body: JSON.stringify(updatedPost),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
        
        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            
            // setTitle( ...editing.title )
            // setDescription( ...state.description )
            setError(null)
            console.log('updated post', json)
            setEdit(false)
            dispatch({type: 'UPDATE_POST', payload: json})
        }

    }

    return (
        <form className="update" onSubmit={handleSubmit}>
            <h3>Edit Post</h3>

            <label>Title:</label>
            <input
                type='text'
                onChange={(e) => handleChange(e)}
                value={editingPost.title}
                name="title"
            />

            <label>Description:</label>
            <input
                type='text'
                onChange={(e) => handleChange(e)}
                value={editingPost.description}
                name="description"
            />

            <button>Edit Post</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}