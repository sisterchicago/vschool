//import { usePostContext } from '../hooks/usePostContext'
//import {useAuthContext} from '../hooks/useAuthContext'
import {useState} from 'react'
import PostEdit from '../components/PostEdit'
import PostDelete from './PostDelete'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export default function PostDetails({ post }) {
    //const { dispatch } = usePostContext()
    //const { user } = useAuthContext()
    //state to handle edit functionality
    const [edit, setEdit] = useState(false)
    //const { handleSubmit } = props

    // useEffect(() => {
    //     const fetchUpdatedPost = async () => {
    //         const response = await fetch('/api/post', {
    //             method: 'PUT',
    //            // body: JSON.stringify(updatedPost),
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${user.token}`
    //             }
    //         })
    //         const json = await response.json()

    //         if (response.ok) {
    //             dispatch({type: 'UPDATE_POST', payload: json})
    //         }
    //     }

    //     if (user) {
    //         fetchUpdatedPost()
    //     }
    // }, [dispatch, user])
    
    function handleEdit(){
        setEdit(true)
    }
    

    // const handleEdit = async () => {
    //     console.log('post in put request:', post)
    //     if (!user) {
    //         return 
    //     }
    //     const response = await fetch('/api/post/' + post._id, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${user.token}`
    //         },
    //         body: JSON.stringify(post)
    //     })
    //     const json = await response.json() 
    //     console.log(json)

    //     if (response.ok) {
    //         dispatch({type: 'UPDATE_POST', payload: json})
    //     }
    // }

    return (
        <>
        {edit 
        ? <PostEdit post={post} setEdit={setEdit} />
        : <div className="post-details">
            <h4>{post.title}</h4>
            <p>{post.description}</p>
            <p>{formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}</p>
            {/* <span className='material-symbols-outlined' onClick={handleClick}>delete</span> */}
            <div className="post-control-box">
                <PostDelete post={post} />
                <div className='material-symbols-outlined' onClick={handleEdit} >edit</div>
            </div>
        </div>
        }
        </>
    )
}