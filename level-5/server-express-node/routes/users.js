const express = require("express")
const userRouter = express.Router()
const { v4: uuidv4 } = require('uuid')
uuidv4()

const users = [
    {name: "brent", age: 75, _id: uuidv4() },
    {name: "kathy", age: 74, _id: uuidv4() },
    {name: "margret", age: 45, _id: uuidv4() },
    {name: "elizabeth", age: 43, _id: uuidv4() },
    {name: "natalie", age: 41, _id: uuidv4() },
    {name: "emma", age: 39, _id: uuidv4() }  
]
//Get All
userRouter.get("/", (req, res) => {
    res.send(users)
})

//Get One
userRouter.get("/:userId", (req, res) => {
    const userId = req.params.userId
    const foundUser = users.find(user => user._id === userId)
    res.send(foundUser)
})

//Get by Genre
//userRouter.get("/search/genre", (req, res) => {
//    const genre = req.query.genre
//    const filteredMovies = movies.filter(movie => movie.genre === genre)
//    res.send(filteredMovies)
//})

userRouter.delete("./:userId", (req, res) => {
    const userId = req.params.userId
    const userIndex = users.findIndex(user => user._id === userId)
    users.splice(userIndex, 1)
    res.send("Successfully deleted user")
})

//Update One
userRouter.put("./:userId", (req, res) => {
    const userId = req.params.userId
    const userIndex = users.findIndex(user => user._id === userId)
    const updatedUser = Object.assign(users[userIndex], req.body)
    res.send(updatedUser)
})

//Post One
userRouter.post("/", (req, res) => {
    const newUser = req.body
    newUser._id = uuidv4()
    users.push(newUser)
    res.send(`Successfully added ${newUser.name}, ${newUser.age} to the database!`)
})

module.exports = userRouter