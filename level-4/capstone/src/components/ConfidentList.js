import React from "react"
//import { QuotesContext } from "../context/QuotesContext"

export default function ConfidentList(props) {

    // const confidentId = (
    //     <div>
    //         {props.quotes.map((quote) =>
    //             <p key={quote.id}>
    //                 {quote.id}
    //             </p>
    //         )}
    //     </div>
    // )
    // const confidentQuote = (
    //     <div>
    //         {props.quotes.map((quote) =>
    //             <p key={quote.id}>
    //                 {quote.url}
    //             </p>
    //         )}
    //     </div>
    // )

    console.log("confidencelist props", props)

    return (
        <div class="confidence">
           <blockquote class="wp-block-quote">
                <p>
                    {props.body}
                </p>
                <cite>
                    {props.author}
                </cite>
            </blockquote>
        </div>
    )
}