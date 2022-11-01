const express = require("express")
const middlewareRouter = express.Router()

const data = {
    name: "English Walnut Tree",
    age: 61
  }
  
  midRouter.use((req, res, next) => {
    req.body = {...data, location : "my backyard", height: "60+ feet"}
    next()
  })
  
  midRouter.use((req,res)=>{
    res.send(req.body)
  })


module.exports = middlewareRouter