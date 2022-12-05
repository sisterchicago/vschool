const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty')



bountyRouter.get("/", (req, res, next) => {
    Bounty.find((err, bounties) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
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

bountyRouter.post("/", (req, res, next) => {
   const newBounty = new Bounty(req.body)
   newBounty.save((err, savedBounty) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
   })
})

bountyRouter.delete("/:bountyId", (req, res, next) => {
   Bounty.findOneAndDelete({ _id: req.params.bountyId }, (err, deletedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item${deletedItem.name} from the database`)
   })
})

bountyRouter.put("/:bountyId", (req, res, next) => {
   Bounty.findOneAndUpdate(
    { _id: req.params.bountyId }, //find this one to update
    req.body, //update the object with this data
    { new: true }, //send back the updated version please
    (err, updatedBounty) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedBounty)
    }
   )
})



module.exports = bountyRouter