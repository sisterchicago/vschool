import React, { useReducer } from 'react'

export const PostContext = React.createContext()

export const postReducer = (state, action) => {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                posts: action.payload
            }
        case 'CREATE_POST': 
            return {
                posts: [action.payload, ...state.posts]
            }
        case 'DELETE_POST':
            return {
                posts: state.posts.filter((p) => p._id !== action.payload._id)
            }
            case 'UPDATE_POST':
                return {
                    posts: state.posts.map(p => p._id === action.payload._id ? action.payload : p)
            }
            default:
                return state 
            }
            
        }
        
    export default function PostContextProvider({children}) {
        const [state, dispatch] = useReducer(postReducer, {posts: null})

        //dispatch({type: '', payload: [{}, {}]})

    return (
        <PostContext.Provider 
            value={{...state, dispatch}}>
            {children}
        </PostContext.Provider>
    )
}