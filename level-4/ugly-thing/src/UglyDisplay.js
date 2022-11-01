import React, { useContext } from 'react'
import { UglyThingsContext } from './UglyThingsContext'
import Form from './Form'
import './index.css'

function UglyDisplay() {
    const { data, deleteUgly, shouldThingEdit } = useContext(UglyThingsContext)

    const renderedUglyThings = data.map(item => {
        return (
            item.shouldEdit === false?
            <div className="ugly-item">
                <h1 key={item._id}>{item.title}</h1>
                <p>{item.description}</p>
                <img src={item.imgUrl} alt={item.title} height="300px" width="300px" />
                <div>
                    <button onClick={() => shouldThingEdit(item._id)}>Submit</button>
                    <button onClick={() => deleteUgly(item._id)}>Delete</button>
                </div>
            </div>
            :
            <div>
                <h1 key={item._id}>{item.title}</h1>
                <p>{item.description}</p>
                <img src={item.imgUrl} alt={item.title} height="300px" width="300px" />
                <button onClick={() => shouldThingEdit(item._id)}>Cancel</button>
                <Form shouldEdit={item.shouldEdit} id={item._id} />
            </div>
        )
    })

    return (
        <div className="ugly-area">
            <div className="ugly-container">
                <div className="ugly-display">
                    {renderedUglyThings}
                </div>
            </div>
        </div>
    )
}

export default UglyDisplay 