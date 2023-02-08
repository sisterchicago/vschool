const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
    timestamp: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true 
    },
    starred: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Issue', issueSchema)