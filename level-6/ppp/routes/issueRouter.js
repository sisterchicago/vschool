const express = require('express')
const issueRouter = express.Router()
const Issue = require('../models/issue')
const mongoose = require('mongoose')
const User = require('../models/user')

//user, starred, issue

const populateQuery = [
    { path: "comments", populate: { path: "author", select: "username" } },
    { path: "user", select: "username" }
]
  
// Get All issues
issueRouter.get("/", (req, res, next) => {
    Issue.find()
        .populate(populateQuery)
        .sort({ timestamp: "desc" })
        .exec((err, issues) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(issues)
        })
})

// Add new issue
issueRouter.post("/", (req, res, next) => {
    req.body.user = req.auth._id
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
})

issueRouter.get("/:user", (req, res, next) => {
    Issue.find({ user: req.auth._id })
        .populate(populateQuery)
        .sort({ timestamp: "desc" })
        .exec((err, issues) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(issues)
        })
})

// Get one issue
issueRouter.get("/singleIssue/:issueId", (req, res, next) => {
    Issue.find({ _id: req.params.issueId })
        .populate(populateQuery)
        .exec((err, issue) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            console.log(issue)
            return res.status(200).send(issue)
        })
})

// Delete issue
issueRouter.delete("/:issueId", (req, res, next) => {
    Issue.findOneAndDelete(
        { _id: req.params.issueId, user: req.auth._id },
        (err, deletedIssue) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(deletedIssue)
        }
    )
})

// Update issue
issueRouter.put("/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId, user: req.auth._id },
        req.body,
        { new: true }
    )
        .populate(populateQuery)
        .exec((err, updatedIssue) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updatedIssue)
        })
})

//Add star
issueRouter.put("/starred/:issueId", (req, res, next) => {
    Issue.findByIdAndUpdate(
        { _id: req.params.issueId },
        { $sort: { starred: 1 } },
        { new: true }
    )
        .populate(populateQuery)
        .exec((err, updatedIssue) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        })
})
 
//Remove star
issueRouter.put("/removeStarred/:issueId", (req, res, next) => {
    Issue.findByIdAndUpdate(
        { _id: req.params.issueId },
        { $sort: { starred: 1 } },
        { new: true }
    )
        .populate(populateQuery)
        .exec((err, updatedIssue) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        })
})

module.exports = issueRouter