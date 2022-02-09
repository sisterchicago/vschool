import React from 'react'

class ListItem extends React.Component {
    constructor() {
        super()
        this.state = {
            something: ''
        }
    }

    render() {
        return (
            <li>{this.props.item}</li>
        )
    }
}

export default ListItem