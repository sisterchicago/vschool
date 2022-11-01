const express = require("express")
const bountyRouter = express.Router()
const Bounty = require('../models/bounty')
//const { v4: uuidv4 } = require('uuid')
//uuidv4()

//const bounty = [
  //  {firstName: "Brent", lastName: "Jones", living: true, bounty: 500, type: "Sith", _id: uuidv4() },
  //  {firstName: "Kathy", lastName: "Jones", living: true, bounty: 550, type: "Sith", _id: uuidv4() },
  //  {firstName: "Margret", lastName: "Tonks", living: true, bounty: 800, type: "Jedi", _id: uuidv4() },
  //  {firstName: "Elizabeth", lastName: "Jones-Hart", living: true, bounty: 800, type: "Jedi", _id: uuidv4() },
//]

bountyRouter.get("/", (req, res, next) => {
    Bounty.find((err, bounties) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
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
    //const newBounty = req.body
    //newBounty._id = uuidv4()
    //bounty.push(newBounty)
    //res.send(newBounty)
})

bountyRouter.delete("/:bountyId", (req, res, next) => {
    Bounty.findOneAndDelete({ _id: req.params.bountyId }, (err, deletedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.firstName} from DB`)
    })
    //const bountyId = req.params.bountyId
    //const bountyIndex = bounty.findIndex(bounty => bounty._id === bountyId)
    //bounty.splice(bountyIndex, 1)
    //res.send("Successfully deleted bounty")
})

bountyRouter.put("/:bountyId", (req, res, next) => {
    Bounty.findOneAndUpdate(
        { _id: req.params.bountyId }, //find this one to update
        req.body, //update object with this data
        { new: true }, //send back updated version please
        (err, updatedBounty) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
    //const bountyId = req.params.bountyId
    //const bountyIndex = bounty.findIndex(bounty => bounty._id === bountyId)
    //const updateBounty = Object.assign(bounty[bountyIndex], req.body)
    //res.send(updateBounty)
})

module.exports = bountyRouter