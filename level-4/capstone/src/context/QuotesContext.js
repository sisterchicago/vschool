import React, { useState } from 'react'
import axios from 'axios'

const QuotesContext = React.createContext()



function QuotesContextProvider(props) {

   //const secret = process.env.YOUR_APP_TOKEN

    const [confidence, setConfidence] = useState([{}])
    const [inspiration, setInspiration] = useState([])
    const [kindness, setKindness] = useState([{}])
    const [success, setSuccess] = useState([])
    //const [today, setToday] = useState({
   //     q: "",
   //     a: ""
   // })
    //const [today, setToday] = useState([])

    function getConfidence() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://favqs.com/api/quotes/?filter=confidence`, {
            headers: {
                Authorization: `Token token="665f88f6e938a4a9e666f74bb272fe7a"`
                
            }
        })
            .then(res => {setConfidence(res.data.quotes) 
                console.log("response from getConfidence func", res.data)})
            .catch(err => console.log(err))
    }

    function getInspiration() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://favqs.com/api/quotes/?filter=inspiration`, {
            headers: {
                Authorization: `Token token="665f88f6e938a4a9e666f74bb272fe7a"`
            }
        })
            .then(res => {setInspiration(res.data.quotes)
                console.log("response from getInspiration func", res.data)})
            .catch(err => console.log(err))
    }

    function getKindness() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://favqs.com/api/quotes/?filter=kindness`, {
            headers: {
                Authorization: `Token token="665f88f6e938a4a9e666f74bb272fe7a"`
            }
        })
            .then(res => {setKindness(res.data.quotes)
                console.log("response from getKindness func", res.data)})
            .catch(err => console.log(err))
    }

    function getSuccess() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://favqs.com/api/quotes/?filter=success`, {
            headers: {
                Authorization: `Token token="665f88f6e938a4a9e666f74bb272fe7a"`
            }
        })
            .then(res => {setSuccess(res.data.quotes)
                console.log("response from getSuccess func", res.data)})
            .catch(err => console.log(err))
    }

    // function getToday() {
    //     axios.get(`https://vschool-cors.herokuapp.com?url=https://zenquotes.io/api/random/?option1=q&option2=a`)
    //         .then(res => setToday({
    //             q: res.data[0].q,
    //             a: res.data[0].a
    //         }))
    //         .catch(err => console.log(err))
    //}

    return (
        <QuotesContext.Provider value={{ 
            confidence, 
            inspiration, 
            kindness, 
            success, 
            //today,
            getConfidence,
            getKindness,
            getInspiration,
            getSuccess,
            //getToday
            }}>
            { props.children }
        </QuotesContext.Provider>
    )
}

export { QuotesContextProvider, QuotesContext }