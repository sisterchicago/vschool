import React from 'react'
import ListItem from './ListItem'

class Input extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            namesList: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState(prevState => ({namesList: [...prevState.namesList, prevState.name]}))       
    }

    render() {
        const listComponents = this.state.namesList.map(item => <ListItem key={item} item={item} />)
        
        return (
            <div>
                <h1>Name Entry</h1>
                <form>
                    <input 
                        type='text'
                        name='name'
                        placeholder='Enter Name Here' 
                        value={this.state.name} 
                        onChange={this.handleChange}
                    />
                    <br />

                    <button onClick={this.handleSubmit}>Add Name</button>
                </form>
                <h1>{this.state.name}</h1>
                <ul id='namesList'>
                    {listComponents}
                </ul>
            </div>
        )
    }
}

export default Input