const express = require('express')
const tvshowRouter = express.Router()
const { v4: uuidv4 } = require('uuid')
uuidv4()

const tvShows = [
    { title: "rock and morty", _id: uuidv4() },
    { title: "watchmen", _id: uuidv4() },
    { title: "gilmore girls", _id: uuidv4() },
    { title: "friends", _id: uuidv4() }
]

tvshowRouter.get("/", (req, res) => {
    res.send(tvShows)
})

tvshowRouter.get("/:tvshowId", (req, res) => {
    const tvShowId = req.params.tvshowId
    const foundShow = tvShows.find(show => show._id === tvShowId)
    res.send(foundShow)
})

tvshowRouter.post("/", (req, res) => {
    const newShow = req.body
    newShow._id = uuidv4()
    tvShows.push(newShow)
    res.send("Successfully added new show")
})


module.exports = tvshowRouter