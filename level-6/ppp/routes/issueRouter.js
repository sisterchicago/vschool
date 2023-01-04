const express = require('express')
const issueRouter = express.Router()
const Issue = require('../models/issue')

//get all issues
issueRouter.get("/", (req, res, next) => {
    Issue.find((err, issues) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

//get user issues
issueRouter.get("/:userId", (req, res, next) => {
    Issue.find({ user: req.auth._id }, (err, issues) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

//add issue
issueRouter.post("/", (req, res, next) => {
    console.log(req.body)
    req.body.user = req.auth._id 
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
})

//delete issue
issueRouter.delete("/:issueId", (req, res, next) => {
    Issue.findOneAndDelete(
        { _id: req.params.issueId },
        (err, deletedIssue) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted issue: ${deletedIssue.title}`)
        }
    )
})

//update issue
issueRouter.put("/:issueId", (req, res, next) => {
    Issue.findOneAndUpate(
        { _id: req.params.issueId },
        (err, updatedIssue) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        }
    )
})

//add comment (add image??)
issueRouter.put("/addcomment/:issueId", (req, res, next) => {
    Issue.findOneAndUpate(
        { _id: req.params.issueId },
        {
            $push: { comments: { username: req.user.username, comment: req.body.comment } }
        },
        { new: true },
        (err, updatedIssue) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        }
    )
})

//delete comment
issueRouter.put('/deletecomment/:issueId', (req, res, next) => {
    Issue.findOneAndUpate(
        { _id: req.params.issueId },
        {
            $pull: { comments: req.body }
        },
        { new: true },
        (err, updatedIssue) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        }
    )
})

module.exports = issueRouter