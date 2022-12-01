const express = require('express')
const bountyRouter = express.Router()
const { v4: uuidv4 } = require('uuid')
uuidv4()


const bounties = [
    { name: "Natalie", age: 41, _id: uuidv4(), living: true, type: "Jedi", bounty: "" },
    { name: "Addison", age: 11, _id: uuidv4(), living: true, type: "Sith", bounty: "" },
    { name: "Paisley", age: 10, _id: uuidv4(), living: true, type: "Sith", bounty: "" }
]


bountyRouter.get("/", (req, res) => {
  res.status(200)
  res.send(bounties)
})


bountyRouter.get("/:bountyId", (req, res, next) => {
    const bountyId = req.params.bountyId 
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    if(!foundBounty) {
        const error = new Error("Item not found")
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundBounty)
})

bountyRouter.get("/search/type", (req, res, next) => {
    const type = req.query.type 
    if(!type) {
        const error = new Error("Type must be provided")
        res.status(500)
        return next(error)
    }
    const filteredBounties = bounties.filter(bounty => bounty.type === type)
    res.status(200).send(filteredBounties)
})

bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.status(201).send(newBounty)
})

bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId 
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Deleted bounty")
})

bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId 
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.status(201).send(updatedBounty)
})



module.exports = bountyRouter