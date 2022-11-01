import React, {useEffect, useContext} from 'react'
import { QuotesContext } from '../context/QuotesContext'
//import TodayQuote from './TodayQuote'


export default function Home() {

    const {today, getToday} = useContext(QuotesContext)

     

    useEffect(() => {
        getToday()
        console.log("useEffect")
    }, [])

    console.log('today', today)

    return (
        <>
            <div className='flex-container'>
                <div className='flex-child one'>
                    <img src="https://zenquotes.io/img/historical.jpg" alt="Collage of Historical Figures" 
                    />
                </div>
                <div className='flex-child two'>
                    <h1 className='home-title'>
                    Influential Leaders. Timeless Wisdom.
                    </h1>
                    <br />
                    <h3 className='home-quote'>
                        "{today.q}"
                    </h3>
                    <br />
                    <h4 className='home-author'>
                       - {today.a} 
                    </h4>   
                </div>
            </div>
        </>
    )
}