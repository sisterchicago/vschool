import React, {useEffect, useContext } from 'react'
import { QuotesContext } from '../context/QuotesContext'
import ConfidentList from './ConfidentList'
//import ConfidentList from '../components/ConfidentList'

export default function Confidence() {

    const {confidence, getConfidence} = useContext(QuotesContext)

    const listOfQuotes = confidence.map((quote, index) => { 
        return (
           <ConfidentList
                key={quote.id}
                body={quote.body}
                author={quote.author}
                index={index}
            />
        //<div>
        //   {console.log(key, "test")}
           //create a component and spread key into this component
         
    )})
    //console.log(confidenceArr, "confidenceArray")
    //console.log(listOfQuotes, "list")
    

    useEffect(() => {
        getConfidence()
        console.log("useEffect")
    }, [])

    console.log("listOfQuotes", listOfQuotes)

    return (
        <div className='confidence'>
            <h2 >Confidence Boosting Quotes from Inspirational Leaders</h2>
            <p className='confidence-quotes'>
                {listOfQuotes}
                
            </p>
        </div>
    )
}