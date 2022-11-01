const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')
uuidv4()

app.use(express.json())
app.use(morgan('dev'))

app.use("/inventory", require("./routes/inventory"))

mongoose.connect('mongodb://localhost:27017/inventorydb', 
    () => console.log('Connected to DB'))


app.listen(8650, () => {
    console.log("The server is running on Port 8650")
})