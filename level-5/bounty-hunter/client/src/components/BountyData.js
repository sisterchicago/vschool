import React, { useState } from 'react'

export default function BountyData(props) {
    //console.log(props)
    const initInputs = { 
        firstName: props.firstName || "", 
        lastName: props.lastName || "",
        living: props.living,
        bounty: props.bounty || "",
        type: props.type || "",
        _id: props._id
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
        //console.log(props)
    }
    //console.log(props.btnText)
    return (
        
        <form onSubmit={handleSubmit}>
            Add New Bounty
            <input
                type="text"
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                placeholder="First Name"
            />
            <input
                type="text"
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange}
                placeholder="Last Name"
            />
            <select 
                onChange={handleChange}
                value={inputs.living || ""}
                name="living"
            >
                <option>Alive?</option>
                <option value="true">Living</option>
                <option value="false">Dead</option>
            </select>
            <select 
                onChange={handleChange}
                value={inputs.type}
                name="type"
            >
                <option>Jedi or Sith?</option>
                <option value="jedi">Jedi</option>
                <option value="sith">Sith</option>
            </select>
            <input
                type="number"
                name="bountyAmount"
                value={inputs.bountyAmount || ''}
                onChange={handleChange}
                placeholder="Bounty Amount"
            />
            <button>{ props.btnText }</button>
        </form>
    )
}