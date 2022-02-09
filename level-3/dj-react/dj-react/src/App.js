import React , {useState} from 'react'
import "./App.css"
import Square from './Square'

function App() {

const [background, setBackground] = useState("blue")
//console.log(state)
const [colors, setColors]= useState(["white", "white", "white", "white"])


const changeFirstSquare = () => {
    //setBackground("green") 

    //if(background === "blue")
        //setBackground("green")
    //else
        //setBackground("blue")
    
    setBackground(prevBackground => {
        if (prevBackground === "blue")
            return "green"
        else
            return "blue"
        //return prevBackground === "blue" ? "green" : "blue"
    })
}

const smallTimeDJ = () => {
    setColors(prevColors => {
        if (prevColors[0] === "white")
            return ["black", "black", "black", "black"]
        else 
            return ["white", "white", "white", "white"]
    })
}

const purpleDJ = () => {
    setColors(prevColors => {
        return ["purple", "purple", prevColors[2], prevColors[3]]
    })
}

const bottomLeft = () => {
    setColors(prevColors => {
        return [prevColors[0], prevColors[1], "blue", prevColors[3]]
    })
}

const bottomRight = () => {
    setColors(prevColors => {
        return [prevColors[0], prevColors[1], prevColors[2], "blue"]
    })
}

const bigDJone = () => {
    setColors(prevColors => {
        return ["yellow", prevColors[1], prevColors[2], prevColors[3]]
    })
}

const bigDJtwo = () => {
    setColors(prevColors => {
        return [prevColors[0], "orange", prevColors[2], prevColors[3]]
    })
}

const bigDJthree = () => {
    setColors(prevColors => {
        return [prevColors[0], prevColors[1], "red", prevColors[3]]
    })
}

const bigDJfour = () => {
    setColors(prevColors => {
        return [prevColors[0], prevColors[1], prevColors[2], "green"]
    })
}

    return (
        <div>
            <Square background={colors[0]} />
            <Square background={colors[1]} />
            <Square background={colors[2]} />
            <Square background={colors[3]} />

            <button onClick={changeFirstSquare}>Change First Square</button>
            <button onClick={smallTimeDJ}>Small Time DJ</button>
            <button onClick={purpleDJ}>Purple DJ</button>
            <button onClick={bottomLeft} >Bottom Left</button>
            <button onClick={bottomRight} >Bottom Right</button>
            <button onClick={bigDJone}>Big DJ 1</button>
            <button onClick={bigDJtwo}>Big DJ 2</button>
            <button onClick={bigDJthree}>Big DJ 3</button>
            <button onClick={bigDJfour}>Big DJ 4</button>
        </div>
    )
}

export default App 