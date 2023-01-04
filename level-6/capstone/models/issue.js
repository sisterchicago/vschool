const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    
})

module.exports = mongoose.model("Issue", issueSchema)