import React, { useState } from 'react'
import AddBountyForm from './AddBountyForm'

export default function Bounty(props) {
    const { name, age, _id, living, type, bounty } = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div className='bounty'>
            { !editToggle ?
                <>
                    <h1>Name: { name }</h1>
                    <p>Age: { age }</p>
                    <button 
                        className='delete-btn'
                        onClick={() => props.deleteBounty(_id)}
                    >
                        Delete
                    </button>
                    <button
                        className='edit-btn'
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}
                    >
                        Edit
                    </button>
                </>
            :
                <>
                    <AddBountyForm 
                        name={name}
                        age={age}
                        _id={_id}
                        btnText="Submit Edit"
                        submit={props.editBounty}
                    />
                    <button
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}
                    >
                        Close
                    </button>
                </>
            }
        </div>
    )
}