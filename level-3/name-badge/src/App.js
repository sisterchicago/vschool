import React, { Component } from "react"
import NameBadge from "./NameBadge"

class App extends Component {
    state = {
        allInfo: [],
        inputs: {
            firstName: " " ,
            lastName: " ",
            age: " ",
            email: "",
            birthplace: "",
            phone: "",
            favFood: "",
            aboutYou: "",
        }
    }
    // Change handler gathers data
    handleChange = (e) => {
        const {name, value}= e.target
        this.setState(prevState => ({
            inputs: {...prevState.inputs, [name]: value}
        }))
        console.log(this.state)
    }
    // Submit handler pushes data into a new name badge object
    handleSubmit = (e) => {
        e.preventDefault()
        const newNameBadge = {...this.state.inputs}
        delete newNameBadge.allInfo
        this.setState(prevState => ({ 
            inputs: {
                firstName: " " ,
                lastName: " ",
                age: " ",
                email: "",
                birthplace: "",
                phone: "",
                favFood: "",
                aboutYou: "",
            },
            allInfo: [...prevState.allInfo, newNameBadge]
        }))
        console.log(this.state)
    }

    render(){
        // Map through allInfo array and return new name badge
        const nameBadges = this.state.allInfo.map((badge, index) => <NameBadge key={index} {...badge} />)
        return(
            <>
                <div className="form-container">
                    <label className="badge">Name Badge</label>
                    <form className="form" onSubmit={this.handleSubmit}>
                        <label className="label">First Name: 
                          <input 
                              type="text"
                              name="firstName"
                              value={this.state.inputs.firstName}
                              placeholder="First Name"
                              onChange={this.handleChange}   
                          >
                          </input>
                        </label>
                        <br/>
                        <label className="label">Last Name:
                          <input
                              type="text"
                              name="lastName"
                              value={this.state.inputs.lastName}
                              placeholder="Last Name"
                              onChange={this.handleChange}
                          >
                          </input>
                        </label>
                        <br/>
                        <label className="label">Age: 
                          <input
                              type="text"
                              name="age"
                              value={this.state.inputs.age}
                              placeholder="Age"
                              onChange={this.handleChange}
                          >
                          </input>
                        </label>
                        <br/>
                        <label className="label">Email:
                          <input
                              type="text"
                              name="email"
                              value={this.state.inputs.email}
                              placeholder="email@address.com"
                              onChange={this.handleChange}
                          >
                          </input>
                        </label>
                        <br/>
                        <label className="label">Birth Place:
                          <input
                              type="text"
                              name="birthplace"
                              value={this.state.inputs.birthplace}
                              placeholder="Place of Birth"
                              onChange={this.handleChange}
                          >
                          </input>
                        </label>
                        <br/>
                        <label className="label">Phone Number:
                          <input
                              type="phone"
                              name="phone"
                              value={this.state.inputs.phone}
                              placeholder="0000000000"
                              onChange={this.handleChange}
                          >
                          </input>
                        </label>
                        <label className="label">Favorite Food:
                          <input
                              type="text"
                              name="favFood"
                              value={this.state.inputs.favFood}
                              placeholder="Favorite Food"
                              onChange={this.handleChange}
                         >
                          </input>
                        </label>
                        <br></br>
                        <label className="label">About You:
                        <br/>
                          <textarea
                              name="aboutYou"
                              value={this.state.inputs.aboutYou}
                              placeholder="Tell Us About Yourself"
                              onChange={this.handleChange}
                          >
                          </textarea>
                        </label>
                        <br></br>
                        <button type="submit">Submit</button>


                    </form>
                </div>
                    {nameBadges}
            </>
        )
    }
}

export default App