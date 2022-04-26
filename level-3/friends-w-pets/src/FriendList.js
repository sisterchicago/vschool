import React from "react"
import PetData from './PetData'
import Friend from './Friend.js'

function FriendList() {
    const petArray = PetData.map(friend => <Friend key={friend.id} name={friend.name} age={friend.age} pets={friend.pets} />)
    return (
        <div className="container">
            {petArray}
        </div>
    )
}

export default FriendList 