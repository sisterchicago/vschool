import React, {useEffect, useContext} from 'react'
import {QuotesContext} from '../context/QuotesContext'
import InspireList from './InspireList'

export default function Inspiration() {

    const {inspiration, getInspiration} = useContext(QuotesContext)

    const listOfQuotes = inspiration.map((quote, index) => { 
        return (
           <InspireList
                key={quote.id}
                body={quote.body}
                author={quote.author}
                index={index}
            />
    )})

    useEffect(() => {
        getInspiration()
        console.log("useEffect")
    }, [])

    console.log('inspiration', inspiration)

    return (
        <div className='inspiration'>
            <h2>Inspirational Quotes from Inspirational Leaders</h2>
            <p className='inspiration-quotes'>
                {listOfQuotes}
            </p>
        </div>
    )
}