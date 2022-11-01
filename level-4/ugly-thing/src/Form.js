import React, { useContext } from 'react'
import { UglyThingsContext } from './UglyThingsContext'

function Form(props) {
    const { inputData, editInputData, handleSubmit, handleChange, editUgly } = useContext(UglyThingsContext)

    return (
        <div>
            <form onSubmit={(e) => {
                props.shouldEdit?
                editUgly(e, props.id):
                handleSubmit(e)
            }}>
                <input 
                    onChange={(e) => handleChange(e, props.shouldEdit)}
                    type="Text"
                    placeholder="Title"
                    name="title"
                    value={props.shouldEdit?editInputData.title:inputData.title}
                />
                <input 
                    onChange={(e) => handleChange(e, props.shouldEdit)}
                    type="Text"
                    placeholder="Description"
                    name="description"
                    value={props.shouldEdit?editInputData.description:inputData.description}
                />
                <input 
                    onChange={(e) => handleChange(e, props.shouldEdit)}
                    type="Text"
                    placeholder="Image URL"
                    name="imgUrl"
                    value={props.shouldEdit?editInputData.imgUrl:inputData.imgUrl}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form 