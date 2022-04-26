/*import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {

    state = {
        color: ""

    }

    componentDidMount = () => {
        axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
        .then(res => {
            console.log(res.data.colors[0].tags[0].name)
            this.setState({
                color: [res.data.colors[0].tags[0].name]
            })
        })
        .catch(err => console.log(err))
    }

    render = () => {
        console.log(this.state.color)
        return(
            <>
                <div style={{backgroundColor: this.state.color, margin: "0px", border: "1pt solid grey", height: "500px"}}>
                    {this.state.color}
                </div>
            </>
        )
    }
}


export default App*/

import React, { Component } from "react"
import axios from "axios"
import "./index.css"

class App extends Component {
    constructor() {
        super()
        this.state = {
            backgroundColor: "",
        }
        this.onClick = this.onClick.bind(this)
    }

componentDidMount() {
    axios.get(`https://www.colr.org/json/colors/random/7`)
        .then((response)=> {
        this.setState({
            backgroundColor: "#" + response.data.colors[0].hex
        })
        console.log(this.state.backgroundColor)
    })
    .catch(error => console.log(error))
}

onClick() {
    axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
    .then((response)=> {
        this.setState(prevState => ({
            backgroundColor: "#" + response.data.colors[0].hex
        }))
        console.log(this.state.backgroundColor)
    })
}

render() {
    return (
        <div className="background" style={{backgroundColor: this.state.backgroundColor}}>
            Random Color
            <button onClick={this.onClick}>Get New Color</button>
        </div>
        )
    }
}

export default App