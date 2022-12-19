import React, { useState, useEffect } from 'react'
import axios from 'axios'
const UglyThingsContext = React.createContext()

function UglyThingsContextProvider(props) {
    const [inputData, setInputData] = useState({title: "", description: "", imgUrl: ""})
    const [editInputData, setEditInputData] = useState({title: "", description: "", imgUrl: ""})
    const [data, setData] = useState([])

    function handleChange(e, shouldEdit) {
        shouldEdit?setEditInputData({...editInputData, [e.target.name]: e.target.value})
        : setInputData({...inputData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        console.log("handleSubmit")
        e.preventDefault()
        axios.post("https://api.vschool.io/sisterchicago/thing/", inputData)
        .then((res) => {
            console.log(res)
            setInputData({title: "", description: "", imgUrl: ""})
            refreshPage()
        })
        .catch(error => console.log(error))
    }

    function refreshPage() {
        return fetchData()
    }

    const fetchData = async () => {
        const result = await axios("https://api.vschool.io/sisterchicago/thing")
        setData(result.data?result.data.map(item => ({...item, shouldEdit: false})):null)
        console.log(result.data)
        console.log("FetchData is working")
    }

    function deleteUgly(id) {
        console.log("deleteUgly")
        console.log(id)
        axios.delete("https://api.vschool.io/sisterchicago/thing/" + id)
        .then(res => {
            console.log(res)
            console.log("item was deleted")
            refreshPage()
        })
        .catch(error => console.log(error))
    }

    function editUgly(e, id) {
        e.preventDefault()
        axios.put("https://api.vschool.io/sisterchicago/thing/" + id,
        {title: editInputData.title, description: editInputData.description, imgUrl: editInputData.imgUrl})
        .then(res => {
            setEditInputData({title: "", description: "", imgUrl: ""})
            refreshPage()
        })
        .catch(error => console.log(error))
    }

    function shouldThingEdit(id) {
        const newData = data.map(item => item._id === id? {...item, shouldEdit: !item.shouldEdit}:item)
        return setData(newData)
    }

    useEffect(() => {
        console.log("useEffect")
        fetchData()
    }, [])

    return (
        <UglyThingsContext.Provider value={{ inputData, data, editInputData, handleSubmit, handleChange, deleteUgly, editUgly, shouldThingEdit }}>
            {props.children}
        </UglyThingsContext.Provider>
    )
}

export { UglyThingsContextProvider, UglyThingsContext }