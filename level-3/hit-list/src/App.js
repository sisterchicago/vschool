import React from 'react'
import Target from "./Target"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
        targets: []
    }
  }

    componentDidMount() {
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
        .then(response => response.json())
        .then(data => {
            this.setState({
                targets: data
            })
        })
    }

    render() {
        const loadingTargets = this.state.targets.map((target) => { return <Target name ={target.name} image = {target.image}/>})
        return (
            <>
                {loadingTargets}
            </>
        )
    }
}

export default App