import React, { useState } from 'react'

export default function AddBountyForm(props) {
    const initInputs = { name: props.name || "", age: props.age || "" }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target 
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                value={inputs.name} 
                onChange={handleChange} 
                placeholder="Name" 
            />
             <input 
                type="text" 
                name="age" 
                value={inputs.age} 
                onChange={handleChange} 
                placeholder="Age" 
            />
            <button>{ props.btnText }</button>
        </form>
    )
}