import { useEffect } from 'react'
import { usePostContext } from '../hooks/usePostContext'
import PostDetails from '../components/PostDetails'
import PostForm from '../components/PostForm'
import {useAuthContext} from '../hooks/useAuthContext'


export default function Home() {
    const {posts, dispatch} = usePostContext()
    const {user} = useAuthContext()

    
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/post', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_POSTS', payload: json})
            }
        }

        if (user) {
            fetchPosts()
        }
    }, [dispatch, user])

    return (
        <div className="home">
            <div className='posts'>
                {posts && posts.map((post) => (
                   <PostDetails key={post._id} post={post} />
                ))}
            </div>
            <PostForm />  
        </div>
    )
}