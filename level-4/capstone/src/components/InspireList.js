import React from "react"

export default function InspireList(props) {

    console.log("inspirelist props", props)

    return (
        <div class="inspiration">
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