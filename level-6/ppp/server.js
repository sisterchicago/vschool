const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const { expressjwt } = require('express-jwt')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const bodyParser = require('body-parser')


app.use(express.json())
app.use(morgan('dev'))
app.use(cors({
    origin: true
}))
app.use(
    fileUpload({
        createParentPath: true 
    })
)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs')

mongoose.connect(
    `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.elkerxq.mongodb.net/ppp?retryWrites=true&w=majority`,
    () => console.log('Connected to DB')
)
app.use('/uploads', require('./routes/fileUploadRouter'))

app.use('/auth', require('./routes/authRouter'))
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))
app.use('/api/issue', require('./routes/issueRouter'))

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === 'UnauthorizedError') {
        res.status(err.status)
    }
    return res.send({ errMsg: err.messsage })
})


app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})