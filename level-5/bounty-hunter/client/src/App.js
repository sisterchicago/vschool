import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Bounty from './components/Bounty'
import BountyData from './components/BountyData'
import './index.css'

export default function App() {
    const [bounties, setBounties] = useState([])

    function getBounties() {
        axios.get("/bounty")
        .then(res => {
            setBounties(res.data)
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    //function getBounties() {
    //    axios.get("/bounty")
    //    .then(res => 
            //console.log(res.data))
    //        setBounties(res.data))
    //    .catch(err => console.log(err.response.data.errMsg))
    //}

    function addBounty(newBounty) {
        axios.post("/bounty", newBounty)
        .then(res => {
            setBounties(prevBounties => [...prevBounties, res.data])
        })
        .catch(err => console.log(err))
    }

    function deleteBounty(bountyId) {
        axios.delete(`/bounty/${bountyId}`)
        .then(res => {
            setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
        })
        .catch(err => console.log(err))
    }

    function editBounty(updates, bountyId) {
        axios.put(`/bounty/${bountyId}`, updates)
        .then(res => {
            setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
        })
        .catch(err => console.log(err))
    }

    //function handleFilter(e) {
      //  if(e.target.value === 'reset') {
        //    getBounties()
        //} else {
          //  axios.get(`/bounties/search`)
        //}
    //}

    useEffect(() => {
       getBounties()
       //console.log('useEffect triggered')
    }, [])

    return (
        <div>
            <div className='bounty-container'>
                <BountyData 
                    submit={addBounty}
                    btnText="Add Bounty"
                />
                { 
                    bounties.map(bounty => 
                        <Bounty 
                            {...bounty} 
                            key={bounty._id} 
                            deleteBounty={deleteBounty}
                            editBounty={editBounty}
                    />) 
                }
            </div>
        </div>
    )
}