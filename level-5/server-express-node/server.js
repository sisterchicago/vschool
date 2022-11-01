const express = require("express")
const app = express()
const { v4: uuidv4 } = require('uuid')
uuidv4()

app.use(express.json())



app.use("/users", require("./routes/users"))
app.use("/nextGen", require("./routes/nextGen"))



app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})