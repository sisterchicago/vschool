const express = require("express")
const nextGenRouter = express.Router()
const { v4: uuidv4 } = require('uuid')
uuidv4()

const nextGen = [
    {name: "elli", age: 20, _id: uuidv4() },
    {name: "jaxson", age: 18, _id: uuidv4() },
    {name: "anna", age: 17, _id: uuidv4() },
    {name: "zakary", age: 15, _id: uuidv4() },
    {name: "kaitlyn", age: 12, _id: uuidv4() },
    {name: "addi", age: 11, _id: uuidv4() },
    {name: "paisley", age: 10, _id: uuidv4() },
    {name: "owen", age: 6, _id: uuidv4() },
    {name: "logan", age: 5, _id: uuidv4() } 
]

nextGenRouter.get("/", (req, res) => {
    res.send(nextGen)
})

nextGenRouter.get("/:nextgenId", (req, res) => {
    const nextgenId = req.params.nextgenId
    const foundNext = nextGen.find(next => next._id === nextgenId)
    res.send(foundNext)
})

nextGenRouter.post("/", (req, res) => {
    const nextGen = req.body
    nextGen._id = uuidv4()
    users.push(nextGen)
    res.send(`Successfully added ${nextGen.name}, ${nextGen.age} to the database!`)
})

module.exports = nextGenRouter