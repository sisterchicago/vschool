const express = require('express')
const commentRouter = express.Router()
const Issue = require('../models/issue')
const mongoose = require('mongoose')


//new comment
commentRouter.post("/:issueId", (req, res, next) => {
    const newComment = req.body 
    Issue.findByIdAndUpdate(
        { _id: req.params.issueId, user: req.auth._id },
        { $addToSet: { comments: { comment: newComment.comment, author: mongoose.Types.ObjectId(req.auth._id)} } },
        { new: true } 
    ).populate({
       path: "comments",
            populate: {
                path: "author",
                select: "username"
            }
    }).exec((err, populatedIssue) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(populatedIssue)
    })
})

//delete comment
commentRouter.delete("/:issueId/:commentId", (req, res, next) => {
    Issue.findByIdAndUpdate(
        { _id: req.params.issueId },
        { $pull: { comments: { _id: req.params.commentId } } },
        { new: true } 
    ).populate({
        path: "comments",
            populate: {
                path: "author",
                select: "username"
            }
    }).exec((err, populatedIssue) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(populatedIssue)
    })
})

//update comment
commentRouter.put("/:commentId", (req, res, next) => {
    Comment.findByIdAndUpdate(
        { _id: req.params.commentId, user: req.auth._id },
        req.body,
        { new: true },
        (err, updatedComment) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedComment)
        }
    )
})

module.exports = commentRouter