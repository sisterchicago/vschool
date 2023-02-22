const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    comment: {
        type: String,
        required: true 
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    }
})

const issueSchema = new Schema({
    issue: {
        type: String,
        required: true 
    },
    description: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    },
    comments: [commentSchema],
    starred: {
        type: mongoose.Schema.Types.Boolean,
        ref: 'User',
        default: false
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
 
})

const Comment = mongoose.model('Comment', commentSchema)
const Issue = mongoose.model('Issue', issueSchema)

module.exports = (Comment, Issue)