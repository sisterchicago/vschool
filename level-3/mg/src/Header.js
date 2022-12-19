import React from 'react'
import img from './trollface.png'

export default function Header() {
    return (
        <header className="header">
            <img 
                src={img}
                className="trollface" 
                alt=""
            />
            <h1 className="header-title">MemeGenerator</h1>
            <h3 className="header-project3">React Course - Project 3</h3>
        </header>
    )
}