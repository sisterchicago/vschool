import React from "react"
import './App.css'

function Target(props) {
    return(
        <div>
            <img className='image' alt="image" src={props.image}/>
            <h3>{props.name}</h3>

        </div>
    )
}

export default Target