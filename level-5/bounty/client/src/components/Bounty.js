import React, { useState } from 'react'
import AddBountyForm from './AddBountyForm'

export default function Bounty(props) {
    const { name, lastName, _id, living, id, type, bountyAmount } = props
    const [editToggle, setEditToggle] = useState(false)
    console.log(props)
    return (
        <div className='bounty'>
            { !editToggle ?
                <>
                    <h1>Name: { name } { lastName }</h1>
                    <p>Living: { String(living) }</p>
                    <p>Type: { type }</p>
                    <p>Bounty: { bountyAmount }</p>
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
                        lastName={lastName}
                        living={living}
                        id={id}
                        type={type}
                        bountyAmount={bountyAmount}
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