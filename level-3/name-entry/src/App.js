import React from 'react'
import Input from './input'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            xyz: ''
        }
    }

    render() {
        return(
            <div>
                <Input />
            </div>
        )
    }
}

export default App