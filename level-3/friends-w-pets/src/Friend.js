import React from 'react'
import Pet from './Pet.js'

function Friend (props) {
    const pets = props.pets
    const petArray = pets.map(pet => <Pet name={pet.name} breed={pet.breed} />)
    return (
        <div className="friend-card">
            <h1>Name: {props.name} </h1>
            <h2>Age: {props.age} </h2>
            <h2 style={{textDecorationLine: 'underline'}}>Pets</h2>
            {petArray}
        </div>
    )
}

export default Friend 