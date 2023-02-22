import { usePostContext } from '../hooks/usePostContext'
import {useAuthContext} from '../hooks/useAuthContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export default function PostDetails({ post }) {
    const { dispatch } = usePostContext()
    const { user } = useAuthContext()

    const handleClick = async () => {
        if (!user) {
            return 
        }
        const response = await fetch('/api/post/' + post._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_POST', payload: json})
        }
    }

    const handleEdit = async () => {
        if (!user) {
            return 
        }
        const response = await fetch('/api/post/' + post._id, {
            method: 'UPDATE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json() 

        if (response.ok) {
            dispatch({type: 'UPDATE_POST', payload: json})
        }
    }

    return (
        <div className="post-details">
            <h4>{post.title}</h4>
            <p>{post.description}</p>
            <p>{formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}</p>
            <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
            <span className='material-symbols-outlined' onClick={handleEdit}>edit</span>
        </div>
    )
}