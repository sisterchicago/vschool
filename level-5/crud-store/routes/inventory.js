const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory')

//Get All
inventoryRouter.get("/", (req, res, next) => {
    Inventory.find((err, inventories) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventories)
    })
})
//Get One
inventoryRouter.get("/:inventoryId", (req, res, next) => {
    const inventoryId = req.params.inventoryId 
    const foundInventory = inventories.find(inventory => inventory._id === inventoryId)
    if(!foundInventory) {
        const error= new Error("The item was not found")
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundInventory)
})

//Post One
inventoryRouter.post("/", (req, res, next) => {
    const newInventory = new Inventory(req.body)
    newInventory.save((err, savedInventory) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedInventory)
    })
})

inventoryRouter.delete("/:inventoryId", (req, res, next) => {
    Inventory.findOneAndDelete({ _id: req.params.inventoryId }, (err, deletedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem} from DB`)
    })
})

inventoryRouter.put("/:inventoryId", (req, res, next) => {
    Inventory.findOneAndUpdate(
        { _id: req.params.inventoryId }, //find this one to update
        req.body, //update object with this data
        { new: true }, //send back updated version please
        (err, updatedInventory) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedInventory)
        }
    )
})




module.exports = inventoryRouter