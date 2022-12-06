import React, { useState } from 'react'
import AddBountyForm from './AddBountyForm'

export default function Bounty(props) {
    const { name, lastName, _id, living, id, bountyAmount } = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div className='bounty'>
            { !editToggle ?
                <>
                    <h1>Name: { name } { lastName }</h1>
                    <p>Living: { living }</p>
                    <p>Type: { id }</p>
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