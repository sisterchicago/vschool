const express = require("express")
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')
uuidv4()

app.use(express.json())
app.use(morgan('dev'))

//Connect to DB
mongoose.connect('mongodb://localhost:27017/moviesdb',
    () => console.log("connected to DB")
)

// Routes //
app.use("/movies", require("./routes/movieRouter"))
app.use("/tvshows", require("./routes/tvshowRouter"))

//Error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


app.listen(8700, () => {
    console.log("The server is running on Port 8700")
})