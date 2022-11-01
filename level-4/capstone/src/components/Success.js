import React, {useEffect, useContext} from 'react'
import { QuotesContext } from '../context/QuotesContext'
import SuccessList from './SuccessList'

export default function Success() {

    const {success, getSuccess} = useContext(QuotesContext)

    const listOfQuotes = success.map((quote, index) => { 
        return (
           <SuccessList
                key={quote.id}
                body={quote.body}
                author={quote.author}
                index={index}
            />
    )})

    useEffect(() => {
        getSuccess()
        console.log("useEffect")
    }, [])

    console.log('success', success)

    return (
        <div className='success'>
            <h2>Quotes on Success from Inspirational Leaders</h2>
            <p className='success-quotes'>
                {listOfQuotes}
            </p>
        </div>
    )
}