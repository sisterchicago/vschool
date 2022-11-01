import React, { useState } from 'react'
import BountyData from './BountyData'

export default function Bounty(props) {
    //console.log(props)
    const { firstName, lastName, living, bounty, type, _id } = props
    const [editToggle, setEditToggle] = useState(false)

    return (
        <div className='bounty'>
            {   !editToggle ?
                <>
                    <h1>Name: { firstName } {lastName}</h1>
                    <h4>Living: { living }</h4>
                    <h4>Bounty: { bounty }</h4>
                    <h4>Type: { type }</h4>
                    <h4>ID: { _id }</h4>
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
                    <BountyData 
                        firstName={firstName}
                        lastName={lastName}
                        living={living}
                        bounty={bounty}
                        type={type}
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