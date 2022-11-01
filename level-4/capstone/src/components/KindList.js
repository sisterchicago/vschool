import React from "react"

export default function KindList(props) {

    console.log("kindlist props", props)

    return (
        <div class='kindness'>
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