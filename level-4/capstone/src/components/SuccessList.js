import React from "react"

export default function SuccessList(props) {

    console.log("successlist props", props)

    return (
        <div class='success'>
            <blockquote class='wp-block-quote'>
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