import React from "react"
import Spot from "./Spot"
import vacationSpots from "./vacationSpots"

function Card(props) {
    const destinations = vacationSpots.map(destination => <Spot
        key={destination.id}
        place={destination.place}
        price={destination.price}
        timeToGo={destination.timeToGo}
        />)
    return (
        <div className="card" >
            <h1>{destinations}</h1>
        </div>
    )
}

export default Card 