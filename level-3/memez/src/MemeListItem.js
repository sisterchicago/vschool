import React from 'react'

export default function MemeListItem(props) {
    return (
        <main>
            <div className = "list-item-container">
                <img 
                    src = {props.randomImage} 
                    onError = {e => e.target.style.display = 'none'} 
                    className = "list-item-img"
                />
                <h2 className = "list-item-text top">{props.topText}</h2>
                <h2 className = "list-item-text bottom">{props.bottomText}</h2>
            </div>               
            <button onClick={props.handleDelete}>DELETE</button>
        </main>
    )
}