import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

//inserts token prior to request
const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
    const token = localStorage.gotItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props) {
    
    const initState = {
        user: JSON.parse(localStorage.getItem('user')) || {}, 
        token: localStorage.getItem('token') || "",
        issues: [],
        errMsg: ""
    }

    const [userState, setUserState] = useState(initState)
    const [issueList, setIssueList] = useState()
    const [page, setPage] = useState("")
    const [userErr, setUserErr] = useState("")

    function getAllIssues() {
        userAxios.get("/api/issue")
            .then(res => setIssueList(res.data))
            .catch(err => console.log(err))
    }

    function signup(credentials) {
        axios.post("/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                getAllIssues()
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function login(credentials) {
        axios.post("/auth/login", credentials)
            .then(res => {
                const { user, token } = res.data 
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                getAllIssues()
                getUserIssues()
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUserState({
            user: {},
            token: "",
            issues: []
        })
    }

    function handleAuthErr(errMsg) {
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg
        }))
    }

    function resetAuthErr() {
        setUserState(prevState => ({
            ...prevState,
            errMsg: ""
        }))
    }

    function getUserIssues() {
        userAxios.get("/api/issue/user")
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    issues: res.data
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function addIssue(newIssue) {
        userAxios.post("/api/issue", newIssue)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    issues: [...prevUserState.issues, res.data]
                }))
                getAllIssues()
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function deleteIssue(issueId) {
        userAxios.delete(`/api/issue/${issueId}`)
            .then(res => {
                setIssueList(prevIssueList => prevIssueList.filter(issue => issue._id !== issueId))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function addComment(commentIssue, issueId) {
        userAxios.put(`/api/issue/addcomment/${issueId}`, commentIssue)
            .then(res => {
                const updateCommentsArr = issueList.map(issue => {
                    if(issueId === issue._id) {
                        issue.comments.push(commentIssue)
                        return issue
                    } else {
                        return issue
                    }
                })
                setIssueList(
                    updateCommentsArr
                )
            })
            .catch(err => console.log(err))
    }

    function deleteComment(comments, issueId) {
        userAxios.put(`/api/issue/deletecomment/${issueId}`, comments)
            .then(res => {
                const updateCommentsArr = issueList.map(issue => {
                    if(issueId === issue._id) {
                        issue = res.data
                        return issue 
                    } else {
                        return issue 
                    }
                })
                setIssueList(
                    updateCommentsArr 
                )
            })
            .catch(err => console.log(err))
    }

    return(
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                addIssue,
                deleteIssue,
                issueList,
                addComment,
                deleteComment,
                setPage,
                page,
                resetAuthErr,
                userErr,
                setUserErr
            }}>
                {props.children}
            </UserContext.Provider>
    )
}