import React, { useEffect, useReducer, useState, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

export const IssueContext = React.createContext()
const issueAxios = axios.create()

issueAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function IssueProvider(props) {
    const location = useLocation().pathname 
    const initState = {
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || "",
        issues: [
            {
                _id: "",
                issue: "",
                description: "",
                imgUrl: "",
                timestamp: "",
                user: "",
                starred: false
            }
        ],
        edit: false,
        currentIssue: {}
    }

    const [state, dispatch] = useReducer(issueReducer, initState)
    const [singleIssue, setSingleIssue] = useState()
    const [uploadedFile, setUploadedFile] = useState({})
    const [uploadPercent, setUploadPercent] = useState(0)

    useEffect(() => {
        console.log(uploadedFile)
    }, [uploadedFile])

    function issueReducer(state, action) {
        let newState
        const prevIssues = [...state.issues]
        switch (action.type) {
            case 'getIssues':
                newState = {
                    ...state,
                    issues: action.value,
                    order: action.order
                }
                break
            case 'getOneIssue':
                newState = {
                    ...state,
                    currentIssue: action.value
                }
                break
            case 'appendIssues':
                newState = {
                    ...state,
                    issues: [...state.issues, action.value]
                }
                break
            case 'removeIssue':
                newState = {
                    ...state,
                    issues: action.value
                }
                break
            case 'updateIssues':
                const updatedIssueIndex = prevIssues.findIndex(
                    (issue) => issue._id === action.value._id
                )
                prevIssues[updatedIssueIndex] = action.value
                newState = {
                    ...state,
                    issues: prevIssues
                }
                break
            case 'setSingleIssue':
                newState = {
                    ...state,
                    currentIssue: action.value 
                }
                break
            case 'edit':
                newState = {
                    ...state,
                    edit: true
                }
                break 
            default:
                throw new Error()
        }
        return newState
    }

    const getUserIssues = useCallback(() => {
        issueAxios
            .get('/api/issue/user')
            .then((res) => {
                dispatch({ type: 'getIssues', value: res.data })
            })
            .catch((err) => console.log(err.response.data.errMsg))
    })
    
    function getAllIssues() {
        issueAxios
            .get('/api/issue/')
            .then((res) => {
                dispatch({ type: 'getIssues', value: res.data })
            })
            .catch((err) => console.log(err.response.data.errMsg))
    }

    function getOneIssue(issueId) {
        issueAxios
            .get(`/api/issue/singleIssue/${issueId}`)
            .then((res) => {
                dispatch({ type: 'setSingleIssue', value: res.data[0] })
            })
            .catch((err) => console.log(err.response.data.errMsg))
    }

    function addIssue(newIssue) {
        issueAxios
            .post('/api/issue', newIssue)
            .then((res) => {
                dispatch({ type: 'appendIssue', value: res.data })
            })
            .catch((err) => console.log(err.response.data.errMsg))
    }

    function deleteIssue(issueId) {
        issueAxios
            .delete(`/api/post/${issueId}`)
            .then((res) => {
                const newerIssues = state.issues.filter((issue) => issue._id !== issueId)
                dispatch({ type: 'removeIssue', value: newerIssues })
            })
            .catch((err) => console.log(err.response.data.errMsg))
    }

    function editIssue(issueId, editedIssue) {
        issueAxios
            .put(`/api/issue/${issueId}`, editedIssue)
            .then((res) => {
                dispatch({ type: 'updateIssues', value: res.data })
            })
            .catch((err) => console.log(err.response.data.errMsg))
    }

    function starredIssue(issueId) {
        issueAxios
            .put(`/api/issue/starred/${issueId}`)
            .then((res) => {
                location === `/single-issue/${issueId}`
                    ? dispatch({ type: 'setSingleIssue', value: res.data })
                    : dispatch({ type: 'updateIssues', value: res.data })
            })
            .catch((err) => console.log(err.response.data.errMsg))
    }

    function removeStarred(issueId) {
        issueAxios
            .put(`/api/issue/removeStarred/${issueId}`)
            .then((res) => {
                location === `/single-issue/${issueId}`
                    ? dispatch({ type: 'setSingleIssue', value: res.data })
                    : dispatch({ type: 'updateIssues', value: res.data })
            })
            .catch((err) => console.log(err.response.data.errMsg))
    }

    function handleSingleIssue(issueId) {
        getOneIssue(issueId)
    }

    async function uploadFile(file, fileName) {
        const formData = new FormData()
        formData.append('file', file, fileName)

        try {
            const res = await issueAxios.post('/api/upload', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                onUploadProgress: (progressEvent) => {
                    setUploadPercent(
                        parseInt(
                            Math.round((progressEvent.loaded * 100) / progressEvent.total)
                        )
                    )
                },
            })
            const { fileName, filePath } = res.data 
            setUploadedFile({ fileName, filePath })
        } catch(err) {
            err.response.status === 500
                ? console.error(new Error('500: Server Error'))
                : console.error(err.response.data.msg)
        }
    }

    return (
        <IssueContext.Provider
            value={{
                state,
                dispatch,
                getUserIssues,
                getAllIssues,
                getOneIssue,
                addIssue,
                deleteIssue,
                editIssue,
                starredIssue,
                removeStarred,
                singleIssue,
                setSingleIssue,
                handleSingleIssue,
                uploadFile,
                uploadedFile,
                setUploadedFile,
                uploadPercent
            }}
        >
            {props.children}
        </IssueContext.Provider>
    )
}