const express = require("express")
const app = express()
const { v4: uuidv4 } = require('uuid')
uuidv4()

app.use(express.json())

app.get("/", require("./middleware"))

app.listen(8800, () => {
    console.log("The server is running on Port 8800")
})