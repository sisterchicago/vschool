import React, { Component } from 'react'
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


export default App