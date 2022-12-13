const mongoose = require("mongoose")
const PostModel = require("../models/post")


function popComments(){
    return PostModel.find((req, res).populate({
      path: 'comments',
      populate: {
        path: "author",
        model: "User"
      }
    }).exec((err, posts) => {
      return posts
    }))
  }



module.exports = popComments