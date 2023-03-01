import { usePostContext } from '../hooks/usePostContext'
import {useAuthContext} from '../hooks/useAuthContext'

// date fns
//import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export default function PostDelete( {post} ) {
    const { dispatch } = usePostContext()
    const { user } = useAuthContext()

    const deletePost = async () => {
        if (!user) {
            return 
        }
        const response = await fetch(`/api/post/${post._id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
            
        })
        console.log('post', post)
        //console.log('_id', _id)
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_POST', payload: json})
        }
    }

    return (
        // <div className="post-details">
        <>
            {/* <h4>{post.title}</h4>
            <p>{post.description}</p>
            <p>{formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}</p>*/} 
            <div className='material-symbols-outlined' onClick={deletePost}>delete</div>
            {/* <span className='material-symbols-outlined' onClick={handleClick}>edit</span> */}
        </>
        // </div>
    )
}