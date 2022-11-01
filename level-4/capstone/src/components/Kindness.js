import React, { useEffect, useContext } from 'react'
import { QuotesContext } from '../context/QuotesContext'
import KindList from './KindList'


export default function Kindness() {

    const {kindness, getKindness} = useContext(QuotesContext)

    const listOfQuotes = kindness.map((quote, index) => { 
        return (
           <KindList
                key={quote.id}
                body={quote.body}
                author={quote.author}
                index={index}
            />
    )})

    useEffect(() => {
        getKindness()
        console.log("useEffect")
    }, [])

    console.log('kindness', kindness)

    return (
        <div className='kindness'>
            <h2>Quotes of Kindness from Inspirational Leaders</h2>
            <p className='kindness-quotes'>
                {listOfQuotes}
            </p>
        </div>
    )
}