const express = require("express")
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')
uuidv4()

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/bountyhunter',
    () => console.log("connected to DB"))

app.use("/bounty", require("./routes/bountyRouter.js"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(8850, () => {
    console.log("The server is running on Port 8850")
})