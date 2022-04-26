import React from 'react'

function Pet(props) {
    return (
        <div className="pet-card">
            <p>{props.name} is a {props.breed}. </p>
        </div>
    )
}

export default Pet 