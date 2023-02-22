require('dotenv').config()
const express = require('express')
const app = express()

const mongoose = require('mongoose')
const postRouter = require('./routes/postRouter')
const userRouter = require('./routes/userRouter')

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/post', postRouter)
app.use('/api/user', userRouter)


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

