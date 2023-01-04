const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
    title: {
        type: String,
        required: true 
    },
    description: {
        type: String
    },
    username: {
        type: String,
        required: true 
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true 
    },
    comments: {
        type: [Object]
    }
})

module.exports = mongoose.model('Issue', issueSchema)