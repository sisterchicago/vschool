import React from 'react'

function Square(props) {
    return (
        <div style={{
            width:  "200px",
            height: "200px",
            border: "1px solid #000",
            display: "inline-block",
            backgroundColor: props.background
        }}>

        </div>
    )
}

export default Square 