import React from "react"

function NameBadge(props) {
    const {
        firstName, 
        lastName, 
        age, 
        email, 
        birthplace, 
        favFood, 
        aboutYou
    } = props

    return(
        <div className= "namebadge">
            <h3 className="full-name">
                {/* <span className="captions"> Name:</span>  */}
                <span>{firstName} {lastName}</span>
                </h3>
            <p>
                <span className="captions">Age: </span>
                <span>{age}</span>
            </p>
            <p>
                <span className="captions">Email: </span>
                <span>{email}</span> 
            </p>
            <p>
                <span className="captions">Birthplace: </span>
                <span>{birthplace}</span> 
            </p>
            <p>
                <span className="captions">Fav Food: </span>
                <span>{favFood}</span>
            </p>
            <p>
                <span className="captions">About You: </span> 
                <span>{aboutYou}</span>
            </p>
        </div>
    )
}


export default NameBadge