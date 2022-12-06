import React, { useState } from 'react'

export default function AddBountyForm(props) {
    const initInputs = { 
        name: props.name || "", 
        lastName: props.lastName || "", 
        living: true, 
        type: "", 
        bountyAmount: 0 
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value, type, checked } = e.target 
        setInputs(prevInputs => ({...prevInputs, [name]: type === "checkbox" ? checked : value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        //props.addBounty(inputs) //double check
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                value={inputs.name} 
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
            <div>
                <input
                    type="checkbox"
                    id="living"
                    checked={inputs.living}
                    onChange={handleChange}
                    name="living"
                />
                <label htmlFor="living">Alive?</label>
            </div>
            {/* <select onChange={handleChange}>
                <option>- Living? -</option>
                <option value="true">True</option>
                <option value="false">False</option>
            </select> */}
            <input
                type="text"
                name="type"
                value={inputs.type}
                onChange={handleChange}
                placeholder="Sith or Jedi"
            />
            {/* <select onChange={handleChange}>
                <option>- Type -</option>
                <option value="jedi">Jedi</option>
                <option value="sith">Sith</option>
            </select> */}
            <input
                type="number"
                name="bountyAmount"
                value={inputs.bountyAmount}
                onChange={handleChange}
                placeholder="Bounty Amount"
            />

            <button>{ props.btnText }</button>
        </form>
    )
}