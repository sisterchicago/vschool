const express = require('express')
const userRouter = express.Router()

//controller functions
const { signupUser, loginUser } = require('../controllers/userController')

// login route
userRouter.post('/login', loginUser)

// signup route
userRouter.post('/signup', signupUser)

module.exports = userRouter